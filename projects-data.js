const PROJECTS = [
  {
    id: "neoscore",
    title: "NeoScore - Behavioral Credit Scoring",
    type: "Data / Machine Learning",
    description:
      "Proyecto de scoring crediticio que estima riesgo financiero a partir del comportamiento de gasto de los clientes. Incluye limpieza de datos, analisis exploratorio, construccion de variables y evaluacion de modelos con foco en resultados realistas y utiles para negocio.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "BigQuery", "Jupyter"],
    repoUrl: "https://github.com/lucacamus13/Scoring-bancario",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/Scoring-bancario/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "agrometal",
    title: "Valuacion de Agrometal",
    type: "Equity Research / Finanzas",
    description:
      "Analisis de valuacion de Agrometal que combina flujo de fondos descontados y comparacion por multiplos para estimar su valor objetivo y construir una tesis de inversion. El trabajo incluye proyecciones financieras, analisis de escenarios y una recomendacion fundamentada.",
    tags: ["Excel", "DCF", "Valuacion por multiplos", "Analisis financiero", "Presentacion ejecutiva"],
    repoUrl: "https://github.com/lucacamus13/Equity_Research_Agrometal_Valuation",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/Equity_Research_Agrometal_Valuation/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "markowitz",
    title: "Optimizacion de Portafolio con Markowitz",
    type: "Finanzas cuantitativas / Python",
    description:
      "Proyecto de optimizacion de portafolios que simula combinaciones de activos para analizar riesgo y retorno, visualizar la frontera eficiente e identificar la cartera con mejor relacion riesgo-retorno segun el ratio de Sharpe.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "yfinance", "Portfolio Optimization"],
    repoUrl: "https://github.com/lucacamus13/markowitz-portfolio",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/markowitz-portfolio/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "update-latam",
    title: "Update LATAM Market",
    type: "Automatizacion financiera / Data",
    description:
      "Herramienta en Python que automatiza la recoleccion y visualizacion de datos economicos y financieros de America Latina. Genera un resumen grafico con mercados, monedas, commodities y tasas de politica monetaria para seguimiento periodico.",
    tags: ["Python", "pandas", "requests", "BeautifulSoup", "yfinance", "matplotlib"],
    repoUrl: "https://github.com/lucacamus13/update-LATAM",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/update-LATAM/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "update-global",
    title: "Update Global",
    type: "Mercados globales / Visualizacion",
    description:
      "Proyecto que automatiza el seguimiento semanal de activos financieros globales mediante visualizaciones simples y actualizadas. Reune indices bursatiles, monedas, commodities y decisiones de politica monetaria en un formato facil de revisar.",
    tags: ["Python", "yfinance", "Visualizacion de datos", "Macro", "Mercados globales"],
    repoUrl: "https://github.com/lucacamus13/update-Global",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/update-Global/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "equity-monitor-arg",
    title: "Equity Monitor ARG",
    type: "Research bursatil / Argentina",
    description:
      "Proyecto en Python para monitorear semanalmente la valuacion de acciones argentinas listadas en el exterior. Permite comparar multiples financieros, detectar desajustes de mercado y generar reportes visuales faciles de compartir.",
    tags: ["Python", "yfinance", "Pandas", "Matplotlib", "Seaborn", "Equity Research"],
    repoUrl: "https://github.com/lucacamus13/equity-monitor-ARG",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/equity-monitor-ARG/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "retail-profitability",
    title: "Retail Profitability Optimization",
    type: "Business Intelligence / Analisis de negocio",
    description:
      "Proyecto de inteligencia de negocios orientado a detectar fugas de margen en retail y simular escenarios de mejora. Combina SQL en BigQuery con Power BI y DAX para diagnosticar el problema y estimar el impacto financiero de nuevas politicas de descuento.",
    tags: ["BigQuery", "SQL", "Power BI", "DAX", "BI", "Analisis de rentabilidad"],
    repoUrl: "https://github.com/lucacamus13/Strategic-Margin-Discount-Optimizer-BI-Analysis-",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/Strategic-Margin-Discount-Optimizer-BI-Analysis-/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "finsentiment",
    title: "FinSentiment",
    type: "NLP financiero / Analisis de texto",
    description:
      "Herramienta que analiza el sentimiento de reportes financieros de la SEC usando procesamiento de lenguaje natural con FinBERT. Descarga documentos, extrae secciones relevantes y genera resultados y visualizaciones para seguir tendencias en el tono de las empresas.",
    tags: ["Python", "NLP", "FinBERT", "SEC Filings", "Visualizacion", "Finanzas"],
    repoUrl: "https://github.com/lucacamus13/FinSentiment",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/FinSentiment/main/README.md",
    branch: "main",
    demoUrl: ""
  },
  {
    id: "chile-monetary-policy",
    title: "Chile Monetary Policy Monitor",
    type: "Macroeconomia / Dashboard",
    description:
      "Proyecto de monitoreo monetario para Chile que integra datos macroeconomicos, construye indicadores y los presenta en un dashboard interactivo. Muestra la capacidad de convertir datos economicos en una herramienta analitica util para la toma de decisiones.",
    tags: ["Python", "Streamlit", "Macroeconomia", "Data Pipeline", "Dashboard", "FRED"],
    repoUrl: "https://github.com/lucacamus13/Chile-Monetary-Policy-Monitor",
    readmeUrl: "https://raw.githubusercontent.com/lucacamus13/Chile-Monetary-Policy-Monitor/main/README.md",
    branch: "main",
    demoUrl: ""
  }
];
