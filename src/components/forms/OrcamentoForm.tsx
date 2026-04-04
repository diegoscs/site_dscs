"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  objetivo: string;
  servico: string;
  recursos: string[];
  descricao: string;
  prazo: string;
  complexidade: string;
  temDesign: string;
  referencias: string;
  nome: string;
  whatsapp: string;
  email: string;
  empresa: string;
  contato: string;
};

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const IconRocket = () => (
  <svg width="22" height="22" viewBox="0 0 70 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M65.395,6.077c-0.148-0.821-0.791-1.464-1.612-1.612c-0.206-0.038-5.126-0.914-11.318-0.914c-9.855,0-16.997,2.144-21.225,6.373l-0.537,0.536c-2.187,2.183-4.851,4.846-7.267,7.703c-2.254-0.093-10.986-0.071-14.767,5.473C4.797,29.314,3.75,35.895,3.708,36.172c-0.083,0.536,0.056,1.083,0.384,1.515s0.817,0.712,1.355,0.776l12.613,1.505c0.827,2.252,1.948,4.312,3.194,5.932l-3.074,3.073c-0.781,0.781-0.781,2.047,0,2.828c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586l3.09-3.09c1.711,1.293,3.817,2.389,6.047,3.178l1.525,12.797c0.064,0.539,0.345,1.028,0.776,1.356c0.351,0.266,0.775,0.407,1.21,0.407c0.102,0,0.203-0.008,0.305-0.023c0.277-0.043,6.857-1.091,12.536-4.962c6.127-4.178,5.509-14.407,5.447-15.248c2.754-2.354,5.318-4.918,7.432-7.035l0.56-0.561C69.433,29.123,65.564,7.014,65.395,6.077zM8.108,34.752c0.563-2.172,1.727-5.725,3.865-8.862c1.677-2.459,5.383-3.379,8.334-3.653c-1.765,2.594-3.086,5.237-3.482,7.747c-0.296,1.883-0.222,3.867,0.114,5.821L8.108,34.752zM44.243,58.159c-3.138,2.139-6.691,3.303-8.862,3.865l-1.079-9.058c1.061,0.174,2.111,0.269,3.122,0.269c0.853,0,1.683-0.063,2.467-0.188c2.604-0.413,5.356-1.834,8.047-3.708C47.726,52.353,46.853,56.38,44.243,58.159zM57.107,35.792l-0.563,0.563c-4.435,4.443-11.858,11.881-17.281,12.741c-3.693,0.596-8.913-0.889-12.302-3.248l10.154-10.154c0.781-0.781,0.781-2.047,0-2.828s-2.047-0.781-2.828,0L24.114,43.039c-2.264-3.179-3.984-8.32-3.337-12.434c0.858-5.441,8.303-12.874,12.751-17.314l0.539-0.539c3.221-3.22,8.561-4.534,13.569-4.991c0.854,1.936,2.737,4.238,4.018,5.677c2.979,3.351,7.272,7.184,10.508,8.134C61.759,26.92,60.441,32.458,57.107,35.792z"/>
    <path d="M45.365,17.845c-3.859,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S49.225,17.845,45.365,17.845zM45.365,29.845c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S48.122,29.845,45.365,29.845z"/>
    <path d="M24.477,55.425c-2.446,2.446-8.259,2.362-11.533,1.992c-0.371-3.275-0.454-9.088,1.992-11.534c0.781-0.78,0.781-2.047,0-2.828s-2.047-0.781-2.828,0c-4.841,4.84-3.112,15.308-2.899,16.485c0.148,0.821,0.791,1.464,1.612,1.612c0.513,0.093,2.785,0.473,5.588,0.473c3.636,0,8.163-0.639,10.896-3.372c0.781-0.78,0.781-2.047,0-2.828S25.258,54.644,24.477,55.425z"/>
  </svg>
);

const IconGrowth = () => (
  <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g>
      <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"/>
      <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283C114.1,276.7,108.9,272.6,103.7,272.6zM93.3,480.1H31.9V293.4h61.4V480.1z"/>
      <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"/>
    </g>
  </svg>
);

const IconGear = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const IconAnalytics = () => (
  <svg width="22" height="22" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/>
    <polygon points="15.62 15.222 9.602 23.968 5.55 20.384 6.61 19.186 9.308 21.572 15.634 12.38 22.384 22.395 29.138 13.47 30.414 14.436 22.308 25.145"/>
    <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
  </svg>
);

const IconRefresh = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 2L11 3.99545L11.0592 4.05474M11 18.0001L13 19.9108L12.9703 19.9417M11.0592 4.05474L13 6M11.0592 4.05474C11.3677 4.01859 11.6817 4 12 4C16.4183 4 20 7.58172 20 12C20 14.5264 18.8289 16.7793 17 18.2454M7 5.75463C5.17107 7.22075 4 9.47362 4 12C4 16.4183 7.58172 20 12 20C12.3284 20 12.6523 19.9802 12.9703 19.9417M11 22.0001L12.9703 19.9417"/>
  </svg>
);

const IconLightbulb = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 16.584V18.9996C10 20.1042 10.8954 20.9996 12 20.9996C13.1046 20.9996 14 20.1042 14 18.9996L14 16.584M12 3V4M18.3643 5.63574L17.6572 6.34285M5.63574 5.63574L6.34285 6.34285M4 12H3M21 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"/>
  </svg>
);

const IconCursor = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="3" y1="11" x2="29" y2="11"/>
    <line x1="7" y1="8" x2="7" y2="8"/>
    <line x1="10" y1="8" x2="10" y2="8"/>
    <line x1="13" y1="8" x2="13" y2="8"/>
    <rect x="3" y="5" width="26" height="22"/>
    <rect x="6" y="14" width="10" height="10"/>
    <rect x="19" y="21" width="7" height="3"/>
    <line x1="20" y1="15" x2="26" y2="15"/>
    <line x1="23" y1="18" x2="26" y2="18"/>
    <polyline points="6,22 12,19 16,22"/>
    <line x1="9" y1="17" x2="9" y2="17"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
  </svg>
);

const IconBrowser = () => (
  <svg width="20" height="20" viewBox="0 0 52.333 52.333" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.839,46.996h33.494c0.554,0,1-0.447,1-1V6.337c0-0.553-0.446-1-1-1H1c-0.553,0-1,0.447-1,1v22.246v3.943v13.469c0,0.553,0.447,1,1,1h12.843H17.839zM2,32.527v-3.943V7.337h48.333v37.658H17.839h-3.996H2V32.527z"/>
    <path d="M21.13,43.968h27.281c0.553,0,1-0.447,1-1V13.366c0-0.553-0.447-1-1-1H3.921c-0.553,0-1,0.447-1,1v12.041v6.634v10.928c0,0.553,0.447,1,1,1H14.48H21.13zM4.921,32.041v-6.634V14.366h42.49v27.603H21.13h-6.65H4.921V32.041z"/>
    <path d="M20.267,33.884c0.332,0,0.657-0.165,0.848-0.468c0.294-0.468,0.153-1.085-0.314-1.379l-6.189-3.894l6.189-3.893c0.468-0.294,0.608-0.911,0.314-1.379c-0.294-0.468-0.912-0.606-1.379-0.314l-7.5,4.716c-0.259,0.162-0.405,0.426-0.445,0.705c-0.011,0.057-0.004,0.108-0.006,0.164c0.002,0.057-0.005,0.108,0.006,0.164c0.04,0.28,0.187,0.543,0.445,0.705l7.5,4.717C19.901,33.834,20.085,33.884,20.267,33.884z"/>
    <path d="M31.219,33.461c0.19,0.304,0.516,0.468,0.848,0.468c0.183,0,0.367-0.05,0.531-0.152l7.5-4.717c0.26-0.162,0.405-0.426,0.445-0.705c0.012-0.057,0.004-0.108,0.005-0.164c-0.001-0.057,0.007-0.108-0.005-0.164c-0.04-0.28-0.188-0.543-0.445-0.705l-7.5-4.717c-0.465-0.293-1.084-0.153-1.379,0.314c-0.293,0.468-0.152,1.085,0.314,1.379l6.189,3.894l-6.189,3.893C31.066,32.376,30.926,32.994,31.219,33.461z"/>
    <path d="M24.478,33.841c0.097,0.029,0.194,0.043,0.29,0.043c0.43,0,0.826-0.277,0.957-0.71l2.875-9.479c0.16-0.528-0.139-1.087-0.667-1.247c-0.529-0.16-1.087,0.139-1.247,0.667l-2.875,9.479C23.651,33.123,23.95,33.681,24.478,33.841z"/>
  </svg>
);

const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z"/>
    <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z"/>
    <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z"/>
    <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z"/>
  </svg>
);

const IconLightning = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"/>
  </svg>
);

const IconPipeline = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fillRule="evenodd" d="M2.75 2.5A1.75 1.75 0 001 4.25v1C1 6.216 1.784 7 2.75 7h1a1.75 1.75 0 001.732-1.5H6.5a.75.75 0 01.75.75v3.5A2.25 2.25 0 009.5 12h1.018c.121.848.85 1.5 1.732 1.5h1A1.75 1.75 0 0015 11.75v-1A1.75 1.75 0 0013.25 9h-1a1.75 1.75 0 00-1.732 1.5H9.5a.75.75 0 01-.75-.75v-3.5A2.25 2.25 0 006.5 4H5.482A1.75 1.75 0 003.75 2.5h-1zM2.5 4.25A.25.25 0 012.75 4h1a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-1zm9.75 6.25a.25.25 0 00-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 00.25-.25v-1a.25.25 0 00-.25-.25h-1z" clipRule="evenodd"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const objetivos = [
  { id: "lancar-produto", label: "Lançar produto digital", icon: <IconRocket /> },
  { id: "escalar-negocio", label: "Escalar negócio existente", icon: <IconGrowth /> },
  { id: "automatizar", label: "Automatizar processos", icon: <IconGear /> },
  { id: "dados", label: "Analisar e usar dados", icon: <IconAnalytics /> },
  { id: "modernizar", label: "Modernizar sistema", icon: <IconRefresh /> },
  { id: "consultoria", label: "Consultoria técnica", icon: <IconLightbulb /> },
];

const servicos = [
  { id: "landing", label: "Landing Page", descricao: "Página de alta conversão para produto ou serviço", icon: <IconCursor /> },
  { id: "site", label: "Site Completo", descricao: "Site institucional ou portfólio profissional", icon: <IconGlobe /> },
  { id: "sistema", label: "Sistema Web / App", descricao: "Aplicação web com funcionalidades complexas", icon: <IconBrowser /> },
  { id: "painel", label: "Painel / Dashboard", descricao: "Visualização de dados e gestão em tempo real", icon: <IconDashboard /> },
  { id: "automacao", label: "Automação", descricao: "Automatize tarefas, integrações e fluxos", icon: <IconLightning /> },
  { id: "engdados", label: "Engenharia de Dados", descricao: "Pipelines, ETL e infraestrutura de dados", icon: <IconPipeline /> },
];

type Recurso = { id: string; label: string; desc: string };

const recursosPorServico: Record<string, Recurso[]> = {
  landing: [
    { id: "animacoes", label: "Animações e efeitos visuais", desc: "Movimentos e transições que tornam a página mais atrativa" },
    { id: "seo", label: "Aparecer no Google (SEO)", desc: "Configurações para sua página aparecer nas buscas" },
    { id: "ab", label: "Testar versões da página", desc: "Comparar qual versão converte mais visitantes em clientes" },
    { id: "chat", label: "Chat ao vivo", desc: "Atenda visitantes em tempo real pelo site" },
    { id: "analytics", label: "Análise de visitantes", desc: "Veja quem acessa, quanto tempo fica e onde clicam" },
    { id: "crm", label: "Captura automática de leads", desc: "Salvar contatos de interessados automaticamente" },
  ],
  site: [
    { id: "blog", label: "Blog e área de notícias", desc: "Publique artigos e conteúdo sem precisar de programador" },
    { id: "idioma", label: "Site em mais de um idioma", desc: "Versão do site em português, inglês ou outros idiomas" },
    { id: "ecommerce", label: "Loja virtual", desc: "Venda produtos diretamente pelo site" },
    { id: "membros", label: "Área restrita para clientes", desc: "Conteúdo exclusivo acessível só por quem tem cadastro" },
    { id: "seo", label: "Aparecer no Google (SEO)", desc: "Configurações para seu site aparecer nas buscas" },
    { id: "analytics", label: "Relatórios de visitas", desc: "Acompanhe quantas pessoas acessam e o que fazem no site" },
  ],
  sistema: [
    { id: "login", label: "Cadastro e login de usuários", desc: "Permitir que pessoas criem conta e acessem o sistema" },
    { id: "pagamentos", label: "Pagamentos online", desc: "Aceitar pagamentos por cartão, Pix ou boleto" },
    { id: "integracao", label: "Integrar com outros sistemas", desc: "Conectar com ferramentas que sua empresa já usa" },
    { id: "painel", label: "Painel de controle interno", desc: "Tela de administração para gerenciar tudo" },
    { id: "notificacoes", label: "Notificações automáticas", desc: "Avisos por e-mail, SMS ou WhatsApp para os usuários" },
    { id: "mobile", label: "Versão para celular", desc: "App disponível para iOS e Android" },
  ],
  painel: [
    { id: "graficos", label: "Gráficos e visualizações", desc: "Dados apresentados de forma visual e interativa" },
    { id: "exportar", label: "Exportar relatórios (Excel/PDF)", desc: "Baixar os dados em formatos prontos para apresentar" },
    { id: "filtros", label: "Filtros e buscas avançadas", desc: "Encontrar informações específicas com facilidade" },
    { id: "bi", label: "Conectar com Power BI ou Looker", desc: "Integrar com ferramentas de BI que você já usa" },
    { id: "alertas", label: "Alertas quando algo muda", desc: "Receba aviso quando uma meta for atingida ou um limite ultrapassado" },
    { id: "usuarios", label: "Vários usuários e permissões", desc: "Cada pessoa vê só o que precisa ver" },
  ],
  automacao: [
    { id: "integracao", label: "Conectar sistemas automaticamente", desc: "Fazer ferramentas diferentes conversarem entre si" },
    { id: "notificacoes", label: "Notificações automáticas", desc: "Avisos disparados sem intervenção manual" },
    { id: "agendamento", label: "Tarefas em horários definidos", desc: "Executar ações automaticamente em dias e horas específicas" },
    { id: "webhooks", label: "Ações entre plataformas", desc: "Um evento em um sistema dispara uma ação em outro" },
    { id: "whatsapp", label: "Integração com WhatsApp", desc: "Enviar mensagens automáticas pelo WhatsApp" },
    { id: "relatorios", label: "Relatórios automáticos", desc: "Receber resumos por e-mail sem precisar abrir o sistema" },
  ],
  engdados: [
    { id: "warehouse", label: "Centralizar todos os dados", desc: "Reunir informações de várias fontes em um único lugar" },
    { id: "dashboards", label: "Painéis visuais de métricas", desc: "Acompanhar os números do negócio de forma clara" },
    { id: "alertas", label: "Alertas e monitoramento", desc: "Ser avisado quando algum dado sair do esperado" },
    { id: "etl", label: "Coleta automática de dados", desc: "Importar e organizar dados de forma automática e contínua" },
    { id: "ia", label: "Inteligência artificial para previsões", desc: "Usar dados históricos para prever tendências e resultados" },
    { id: "bi", label: "Conectar com Power BI ou Looker", desc: "Integrar com ferramentas de análise que você já usa" },
  ],
};

const prazos = [
  { id: "urgente", label: "Urgente", sub: "até 4 semanas" },
  { id: "normal", label: "Normal", sub: "1–3 meses" },
  { id: "tranquilo", label: "Tranquilo", sub: "3–6 meses" },
  { id: "flexivel", label: "Flexível", sub: "sem prazo definido" },
];

const complexidades = [
  { id: "simples", label: "Simples", sub: "Funcionalidades básicas" },
  { id: "medio", label: "Médio", sub: "Integrações e customizações" },
  { id: "complexo", label: "Complexo", sub: "Alto volume, escala, IA" },
];

const designStatuses = [
  { id: "nao-tenho", label: "Não tenho design" },
  { id: "tenho-referencia", label: "Tenho referências" },
  { id: "tenho-wireframe", label: "Tenho wireframe" },
  { id: "design-pronto", label: "Design pronto" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(data: FormData): string {
  const objetivo = objetivos.find((o) => o.id === data.objetivo)?.label ?? data.objetivo;
  const servico = servicos.find((s) => s.id === data.servico)?.label ?? data.servico;
  const prazo = prazos.find((p) => p.id === data.prazo)?.label ?? data.prazo;
  const complexidade = complexidades.find((c) => c.id === data.complexidade)?.label ?? data.complexidade;
  const design = designStatuses.find((d) => d.id === data.temDesign)?.label ?? data.temDesign;

  const recursos = data.recursos.length > 0
    ? (recursosPorServico[data.servico] ?? [])
        .filter((r) => data.recursos.includes(r.id))
        .map((r) => r.label)
        .join(", ")
    : "Nenhum";

  return [
    `*Nova Solicitação de Orçamento — DSCS*`,
    ``,
    `*Objetivo:* ${objetivo}`,
    `*Serviço:* ${servico}`,
    `*Recursos extras:* ${recursos}`,
    ``,
    `*Contexto do projeto:*`,
    data.descricao || "(não informado)",
    ``,
    `*Prazo:* ${prazo}`,
    `*Complexidade:* ${complexidade}`,
    `*Design:* ${design}`,
    data.referencias ? `*Referências:* ${data.referencias}` : "",
    ``,
    `*Contato:*`,
    `Nome: ${data.nome}`,
    `WhatsApp: ${data.whatsapp}`,
    `Email: ${data.email}`,
    data.empresa ? `Empresa: ${data.empresa}` : "",
    `Preferência de contato: ${data.contato}`,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? "w-2 h-2 bg-[var(--color-primary)]"
              : i === current
              ? "w-3 h-3 bg-[var(--color-primary)]"
              : "w-2 h-2 bg-[var(--color-border-hover)]"
          }`}
        />
      ))}
    </div>
  );
}

function StepLabel({ step, total }: { step: number; total: number }) {
  return (
    <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-widest mb-2 text-center">
      Passo {step} de {total}
    </p>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const TOTAL_STEPS = 6;

const emptyForm: FormData = {
  objetivo: "",
  servico: "",
  recursos: [],
  descricao: "",
  prazo: "",
  complexidade: "",
  temDesign: "",
  referencias: "",
  nome: "",
  whatsapp: "",
  email: "",
  empresa: "",
  contato: "whatsapp",
};

export default function OrcamentoForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const update = (patch: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...patch }));

  const toggleRecurso = (id: string) =>
    update({
      recursos: formData.recursos.includes(id)
        ? formData.recursos.filter((x) => x !== id)
        : [...formData.recursos, id],
    });

  const canAdvance = () => {
    if (step === 1) return !!formData.objetivo;
    if (step === 2) return !!formData.servico;
    if (step === 3) return true;
    if (step === 4) return !!formData.prazo && !!formData.complexidade && !!formData.temDesign;
    if (step === 5) return !!formData.nome && !!formData.whatsapp && !!formData.email;
    return true;
  };

  const handleNext = () => { if (canAdvance() && step < TOTAL_STEPS) setStep((s) => s + 1); };
  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    const msg = buildWhatsAppMessage(formData);
    window.open(`https://wa.me/5511964197606?text=${encodeURIComponent(msg)}`, "_blank");
    setDone(true);
  };

  const cardBase = "p-4 rounded-xl border cursor-pointer transition-all duration-150 text-left";
  const cardActive = "border-[var(--color-primary)] bg-[var(--color-primary-muted)]";
  const cardInactive = "border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] hover:border-[var(--color-border-hover)]";

  // ── Confirmation ──────────────────────────────────────────────────────────
  if (done) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-14 h-14 rounded-full bg-[var(--color-primary-muted)] flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">Solicitação enviada!</h2>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto mb-8 leading-relaxed">
          O WhatsApp foi aberto com o resumo do seu projeto. Responderei em até 24h com uma proposta personalizada.
        </p>
        <button
          onClick={() => { setDone(false); setStep(1); setFormData(emptyForm); }}
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] underline transition-colors"
        >
          Enviar outra solicitação
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <StepLabel step={step} total={TOTAL_STEPS} />
      <ProgressDots current={step - 1} total={TOTAL_STEPS} />

      {/* ── Step 1: Objetivo ────────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">Qual é o seu objetivo?</h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">Escolha o que melhor descreve o que você quer alcançar.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {objetivos.map((obj) => (
              <button
                key={obj.id}
                type="button"
                onClick={() => update({ objetivo: obj.id })}
                className={`${cardBase} flex items-center gap-3 ${formData.objetivo === obj.id ? cardActive : cardInactive}`}
              >
                <span className={`flex-shrink-0 ${formData.objetivo === obj.id ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
                  {obj.icon}
                </span>
                <span className="text-sm font-medium text-[var(--color-text-dark)]">{obj.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Serviço ─────────────────────────────────────────────── */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">Que tipo de projeto é esse?</h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">Selecione o serviço mais próximo do que você precisa.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicos.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => update({ servico: s.id, recursos: [] })}
                className={`${cardBase} flex items-start gap-3 ${formData.servico === s.id ? cardActive : cardInactive}`}
              >
                <span className={`flex-shrink-0 mt-0.5 ${formData.servico === s.id ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
                  {s.icon}
                </span>
                <span>
                  <p className="text-sm font-semibold text-[var(--color-text-dark)] mb-0.5">{s.label}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{s.descricao}</p>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Recursos ────────────────────────────────────────────── */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">O que você precisa no projeto?</h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">
            Marque tudo que faz sentido para o seu caso. Não sabe ao certo? Sem problema — pode deixar em branco.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(recursosPorServico[formData.servico] ?? []).map((r) => {
              const active = formData.recursos.includes(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => toggleRecurso(r.id)}
                  className={`${cardBase} flex items-start gap-3 ${active ? cardActive : cardInactive}`}
                >
                  <div className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 border flex items-center justify-center transition-colors ${active ? "border-[var(--color-primary)] bg-[var(--color-primary)]" : "border-[var(--color-border-hover)]"}`}>
                    {active && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span>
                    <p className="text-sm font-medium text-[var(--color-text-dark)] leading-snug">{r.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5 leading-snug">{r.desc}</p>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Step 4: Contexto ────────────────────────────────────────────── */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">Contexto do projeto</h2>
            <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">Quanto mais detalhe, mais precisa será a proposta.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">Descreva o projeto</label>
            <textarea
              value={formData.descricao}
              onChange={(e) => update({ descricao: e.target.value })}
              placeholder="O que você quer construir? Quais são os objetivos? Existe algum sistema atual que precisa ser integrado ou substituído?"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">Prazo desejado</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {prazos.map((p) => (
                <button key={p.id} type="button" onClick={() => update({ prazo: p.id })}
                  className={`${cardBase} text-center ${formData.prazo === p.id ? cardActive : cardInactive}`}>
                  <p className="text-sm font-medium text-[var(--color-text-dark)]">{p.label}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{p.sub}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">Complexidade estimada</label>
            <div className="grid grid-cols-3 gap-2">
              {complexidades.map((c) => (
                <button key={c.id} type="button" onClick={() => update({ complexidade: c.id })}
                  className={`${cardBase} text-center ${formData.complexidade === c.id ? cardActive : cardInactive}`}>
                  <p className="text-sm font-medium text-[var(--color-text-dark)]">{c.label}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{c.sub}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">Status do design</label>
            <div className="grid grid-cols-2 gap-2">
              {designStatuses.map((d) => (
                <button key={d.id} type="button" onClick={() => update({ temDesign: d.id })}
                  className={`${cardBase} text-center ${formData.temDesign === d.id ? cardActive : cardInactive}`}>
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">
              Links de referência <span className="text-[var(--color-text-muted)] font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              value={formData.referencias}
              onChange={(e) => update({ referencias: e.target.value })}
              placeholder="ex: site.com, figma.com/..."
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
        </div>
      )}

      {/* ── Step 5: Contato ─────────────────────────────────────────────── */}
      {step === 5 && (
        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">Seus dados de contato</h2>
            <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">Para enviar a proposta personalizada.</p>
          </div>

          {[
            { key: "nome", label: "Nome *", type: "text", placeholder: "Seu nome" },
            { key: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "(11) 99999-9999" },
            { key: "email", label: "Email *", type: "email", placeholder: "seu@email.com" },
            { key: "empresa", label: "Empresa (opcional)", type: "text", placeholder: "Nome da empresa ou projeto" },
          ].map(({ key, label, type, placeholder }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-2">{label}</label>
              <input
                type={type}
                value={formData[key as keyof FormData] as string}
                onChange={(e) => update({ [key]: e.target.value })}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-3">Como prefere ser contatado?</label>
            <div className="grid grid-cols-3 gap-2">
              {[{ id: "whatsapp", label: "WhatsApp" }, { id: "email", label: "Email" }, { id: "qualquer", label: "Qualquer um" }].map((c) => (
                <button key={c.id} type="button" onClick={() => update({ contato: c.id })}
                  className={`${cardBase} text-center ${formData.contato === c.id ? cardActive : cardInactive}`}>
                  <span className="text-sm font-medium text-[var(--color-text-dark)]">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Step 6: Revisão ─────────────────────────────────────────────── */}
      {step === 6 && (
        <div>
          <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-2 text-center">Revise sua solicitação</h2>
          <p className="text-sm text-[var(--color-text-secondary)] text-center mb-8">Tudo certo? Clique em Enviar para abrir o WhatsApp com o resumo.</p>

          <div className="rounded-xl border border-[var(--color-border-dark)] bg-[var(--color-bg-secondary-dark)] divide-y divide-[var(--color-border-dark)] mb-8">
            {[
              { label: "Objetivo", value: objetivos.find((o) => o.id === formData.objetivo)?.label, targetStep: 1 },
              { label: "Serviço", value: servicos.find((s) => s.id === formData.servico)?.label, targetStep: 2 },
              {
                label: "Recursos",
                value: formData.recursos.length > 0
                  ? (recursosPorServico[formData.servico] ?? [])
                      .filter((r) => formData.recursos.includes(r.id))
                      .map((r) => r.label)
                      .join(", ")
                  : "Nenhum selecionado",
                targetStep: 3,
              },
              { label: "Prazo", value: prazos.find((p) => p.id === formData.prazo)?.label, targetStep: 4 },
              { label: "Complexidade", value: complexidades.find((c) => c.id === formData.complexidade)?.label, targetStep: 4 },
              { label: "Design", value: designStatuses.find((d) => d.id === formData.temDesign)?.label, targetStep: 4 },
              { label: "Contato", value: `${formData.nome} · ${formData.whatsapp}`, targetStep: 5 },
            ].map(({ label, value, targetStep }) => (
              <div key={label} className="flex items-start justify-between px-5 py-3 gap-4">
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest font-mono w-24 flex-shrink-0 pt-0.5">{label}</span>
                <span className="text-sm text-[var(--color-text-dark)] flex-1">{value}</span>
                <button type="button" onClick={() => setStep(targetStep)} className="text-xs text-[var(--color-primary)] hover:underline flex-shrink-0">
                  Editar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--color-border-dark)]">
        {step > 1 ? (
          <button type="button" onClick={handleBack} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] transition-colors">
            ← Voltar
          </button>
        ) : (
          <span />
        )}

        {step < TOTAL_STEPS ? (
          <button type="button" onClick={handleNext} disabled={!canAdvance()}
            className="px-6 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            Continuar →
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}
            className="px-6 py-2.5 rounded-md text-sm font-semibold bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity">
            Enviar pelo WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}
