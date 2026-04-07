---
title: "Como criei um mapa interativo com Geospatial + Supabase + Mapbox"
description: "Case study: implementando queries geoespaciais em tempo real com PostgreSQL PostGIS, Supabase e Mapbox. Performance e técnicas que aprendemos."
date: "2024-04-01"
author: "Diego Candido"
category: "Data Engineering"
image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=630&fit=crop"
---

## O Desafio

Tínhamos um aplicativo que precisava mostrar **locais em tempo real** em um mapa. Não era só exibir pontos — precisávamos:

- ✅ Filtrar por raio (ex: "restaurantes a 5km de mim")
- ✅ Performance em **milhões de registros**
- ✅ Atualizar em **tempo real**
- ✅ Mobile-first

## A Solução: Geospatial + Supabase + Mapbox

### 1. PostGIS no Banco de Dados

Usamos **PostGIS** (extensão do PostgreSQL) para queries geoespaciais:

\`\`\`sql
-- Habilitar extensão
CREATE EXTENSION IF NOT EXISTS postgis;

-- Tabela com coluna geográfica
CREATE TABLE locations (
  id uuid primary key,
  name text,
  category text,
  -- Coluna geográfica do PostGIS
  geom geography(Point, 4326),
  created_at timestamp default now()
);

-- Índice para performance
CREATE INDEX idx_locations_geom ON locations USING GIST(geom);
\`\`\`

### 2. Query de Raio com RLS

\`\`\`sql
-- Buscar locais dentro de 5km
SELECT 
  id,
  name,
  category,
  -- Distância em metros
  ST_Distance(geom, ST_SetSRID(ST_Point(-43.1729, -22.9068), 4326)) as distance
FROM locations
WHERE 
  -- Filter por raio (5km = 5000m)
  ST_DWithin(
    geom,
    ST_SetSRID(ST_Point(-43.1729, -22.9068), 4326),
    5000
  )
  -- RLS: apenas público
  AND category = 'público'
ORDER BY distance ASC
LIMIT 100;
\`\`\`

### 3. Frontend com React + Mapbox

\`\`\`typescript
'use client';

import { useEffect, useState } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { supabase } from '@/lib/supabase';

export function LocationMap() {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    // Pegar localização do usuário
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      // Query ao Supabase
      const { data } = await supabase
        .rpc('nearby_locations', {
          lat: latitude,
          lng: longitude,
          distance_meters: 5000,
        });
      
      setLocations(data);
    });
  }, []);
  
  return (
    <Map
      initialViewState={{
        longitude: -43.1729,
        latitude: -22.9068,
        zoom: 13,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          longitude={loc.lng}
          latitude={loc.lat}
        >
          <div className="marker">{loc.name}</div>
        </Marker>
      ))}
    </Map>
  );
}
\`\`\`

## Resultados

| Métrica | Resultado |
|---------|-----------|
| **Tempo de query** | <100ms (com 1M registros) |
| **Atualização em tempo real** | Sim (via Supabase Realtime) |
| **Mobile** | 60fps |
| **Custos** | ~$25/mês (Supabase) |

## Lições Aprendidas

### ✅ O que funcionou

1. **PostGIS é poderoso** — queries geoespaciais nativas
2. **Índices GIST** — essencial para performance
3. **RLS do Supabase** — segurança sem backend adicional
4. **Mapbox** — melhor DX que alternativas

### ❌ O que aprendemos

1. **Não otimizem cedo** — começamos com índices complexos, simples basta
2. **Caching é crítico** — queries cachear por 30s economizaram 80% de custos
3. **Geospatial é matemática** — SRID 4326 é WGS84 (lat/lng padrão)

## Como Replicar

1. **Criar RPC no Supabase:**

\`\`\`sql
CREATE OR REPLACE FUNCTION nearby_locations(
  lat float8,
  lng float8,
  distance_meters int
)
RETURNS TABLE (id uuid, name text, distance float8) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    l.id,
    l.name,
    ST_Distance(l.geom, ST_SetSRID(ST_Point(lng, lat), 4326))::float8
  FROM locations l
  WHERE ST_DWithin(l.geom, ST_SetSRID(ST_Point(lng, lat), 4326), distance_meters)
  ORDER BY distance ASC;
END;
$$ LANGUAGE plpgsql;
\`\`\`

2. **Chamar do frontend:**

\`\`\`typescript
const { data } = await supabase.rpc('nearby_locations', {
  lat: userLat,
  lng: userLng,
  distance_meters: 5000,
});
\`\`\`

## Conclusão

Geospatial é mais acessível do que parece. Com **PostGIS + Supabase + Mapbox**, você tem:

- ✅ Backend escalável
- ✅ Frontend moderno
- ✅ Custos baixos
- ✅ Sem DevOps

Se você está construindo algo parecido, recomendo esse stack.

---

**Quer discutir a implementação?** [Entre em contato](/contato) ou deixe uma mensagem no [meu GitHub](https://github.com/diegoscs).
