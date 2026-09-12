import type { Dictionary } from './en';

const dict: Dictionary = {
  meta: {
    title: 'Civera Engineering — Ingeniería estructural para edificios y proyectos industriales',
    description:
      'Ingeniería estructural, civil y multidisciplinaria para edificios y proyectos industriales: hormigón armado, acero estructural, fundaciones, conexiones y documentación técnica.',
  },
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    projects: 'Proyectos',
    experience: 'Experiencia',
    visualisation: 'Diseño y visualización',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Consultar un proyecto',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    language: 'Idioma',
  },
  hero: {
    line1: 'Ingeniería estructural',
    line2: 'para edificios y',
    line3: 'proyectos industriales',
    supporting:
      'Ingeniería estructural y multidisciplinaria para edificios y proyectos industriales, desde el análisis y el diseño hasta la documentación técnica y el soporte durante la construcción.',
    categories: 'Edificios · Industria · Acero · Visualización',
    primary: 'Nuestros servicios',
    secondary: 'Ver proyectos',
  },
  services: {
    title: 'Nuestros servicios de ingeniería',
    items: {
      concrete: {
        title: 'Estructuras de hormigón armado',
        desc: 'Análisis y diseño de losas, vigas, columnas, tabiques, núcleos y sistemas estructurales completos de hormigón armado.',
      },
      steel: {
        title: 'Acero estructural',
        desc: 'Ingeniería de sistemas de acero estructural para aplicaciones edilicias e industriales.',
      },
      foundation: {
        title: 'Ingeniería de fundaciones',
        desc: 'Diseño de fundaciones de hormigón armado y sistemas de soporte según cargas estructurales, requisitos del proyecto y condiciones del terreno.',
      },
      connections: {
        title: 'Conexiones metálicas',
        desc: 'Ingeniería y detalle de conexiones de acero estructural para edificios y estructuras industriales.',
      },
      documentation: {
        title: 'Documentación de ingeniería',
        desc: 'Cálculos estructurales, planos, detalles de armaduras, cómputos y documentación técnica coordinada.',
      },
      industrial: {
        title: 'Soporte de ingeniería industrial',
        desc: 'Soporte de ingeniería para proyectos industriales, incluyendo coordinación multidisciplinaria, documentación técnica e ingeniería orientada a la construcción.',
      },
    },
  },
  projects: {
    title: 'Proyectos estructurales seleccionados',
    description: 'Diseño estructural completo de un edificio residencial de hormigón armado.',
    view: 'Ver proyecto',
    scope: [
      'Diseño completo de estructura de hormigón armado',
      'Ingeniería de fundación y superestructura',
      'Documentación estructural y coordinación',
      'Soporte de ingeniería en etapa de construcción',
    ],
  },
  experience: {
    title: 'La experiencia de nuestro equipo',
    intro1:
      'Los profesionales que colaboran bajo Civera combinan experiencia directa en el diseño y cálculo de edificios de hormigón armado con roles profesionales activos en proyectos industriales e internacionales.',
    intro2:
      'Brindamos diseño estructural, estructuras de acero, diseño de conexiones, ingeniería de fundaciones y coordinación técnica multidisciplinaria en múltiples sectores y entornos de proyecto.',
    items: {
      rc: {
        title: 'Cálculos de hormigón armado',
        desc: 'Análisis y diseño estructural completo de edificios de hormigón armado incluyendo losas, vigas, columnas, muros y fundaciones.',
      },
      industrial: {
        title: 'Proyectos industriales y multidisciplinarios',
        desc: 'Experiencia en ingeniería estructural, mecánica y de piping para plantas industriales, soportes de equipos, plataformas y estructuras de proceso.',
      },
      steel: {
        title: 'Conexiones y estructuras de acero',
        desc: 'Diseño y verificación de conexiones abulonadas y soldadas, placas base, arriostramientos, acero secundario e interfaces estructurales.',
      },
      international: {
        title: 'Coordinación internacional',
        desc: 'Ingenieros trabajando entre Europa y Argentina bajo distintas condiciones, normativas y entornos de proyecto.',
      },
      review: {
        title: 'Revisión técnica y coordinación',
        desc: 'Revisión técnica, coordinación multidisciplinaria, cómputos, documentación y soporte de entrega de proyecto.',
      },
    },
    strip: {
      geo: {
        title: 'Ingenieros entre Europa y Argentina',
        desc: 'Trabajando bajo distintas condiciones y husos horarios.',
      },
      teams: {
        title: 'Equipos multidisciplinarios',
        desc: 'Colaboración con equipos internacionales y especialistas.',
      },
      quality: {
        title: 'Calidad y confiabilidad',
        desc: 'Rigor técnico, comunicación clara y entregas puntuales.',
      },
    },
  },
  visualisation: {
    title: 'Diseño y visualización',
    intro:
      'Visualización arquitectónica y técnica para apoyar el desarrollo de diseño, la comunicación de ingeniería y la presentación de proyectos.',
    checklist: [
      'Visualización arquitectónica',
      'Visualización de interiores',
      'Modelos 3D estructurales',
      'Visualización técnica',
    ],
    cards: {
      architectural: {
        title: 'Visualización arquitectónica',
        desc: 'Visualización arquitectónica de alta calidad para apoyar el desarrollo de diseño, la comunicación con el cliente y la presentación del proyecto.',
        image: '/images/visualisation/01-architectural-visualisation.jpg',
        alt: 'Render exterior — Edificio de oficinas en Noruega, vista al atardecer con nieve',
      },
      interior: {
        title: 'Visualización de interiores',
        desc: 'Visualización de interiores desarrollada para comunicar carácter espacial, materiales e intención de diseño.',
        image: '/images/visualisation/02-interior-visualisation.jpg',
        alt: 'Render interior — Espacio de oficinas open space con cielorraso acústico y luz natural',
      },
      model: {
        title: 'Modelos 3D estructurales',
        desc: 'Modelado estructural tridimensional utilizado para analizar el comportamiento estructural, coordinar geometría y comunicar soluciones de ingeniería.',
        image: '/images/visualisation/03-structural-3d-model.jpg',
        alt: 'Modelo estructural tridimensional de un edificio de hormigón armado',
      },
      technical: {
        title: 'Visualización técnica',
        desc: 'Modelos estructurales e información técnica de construcción desarrollados para comunicar claramente la intención de diseño y apoyar la ejecución.',
        image: '/images/visualisation/04-technical-visualisation.jpg',
        alt: 'Estructura de transferencia de hormigón armado en etapa de obra',
      },
    },
  },
  process: {
    title: 'Cómo trabajamos',
    steps: {
      requirements: {
        title: 'Requisitos',
        desc: 'Entendemos su proyecto, alcance y objetivos.',
      },
      analysis: {
        title: 'Análisis',
        desc: 'Analizamos cargas, geometría y comportamiento estructural.',
      },
      design: {
        title: 'Diseño',
        desc: 'Desarrollamos soluciones seguras, eficientes y construibles.',
      },
      documentation: {
        title: 'Documentación',
        desc: 'Preparamos cálculos, planos y especificaciones técnicas.',
      },
      delivery: {
        title: 'Entrega',
        desc: 'Entregamos ingeniería coordinada y confiable.',
      },
    },
    aside1:
      'Definimos el alcance, los criterios de diseño, los entregables y las responsabilidades antes de comenzar cada encargo.',
    aside2:
      'El trabajo de ingeniería se desarrolla mediante análisis coordinado, revisión interna y entrega documentada.',
    aside3:
      'Cuando se requiere aprobación o certificación estatutaria local, la aprobación final queda bajo la responsabilidad del profesional habilitado localmente.',
  },
  about: {
    title: 'Sobre Civera',
    p1: 'Civera Engineering es una práctica colaborativa de ingeniería enfocada en soluciones estructurales, civiles y multidisciplinarias para edificios y proyectos industriales.',
    p2: 'Nuestro trabajo combina análisis estructural, diseño práctico y documentación técnica clara, cubriendo estructuras de hormigón armado y acero, fundaciones y soporte de ingeniería durante el desarrollo del proyecto y la construcción.',
    p3: 'Civera reúne a profesionales con experiencia previa en diseño de edificios residenciales y proyectos industriales en las disciplinas civil, estructural, mecánica y de piping. Nuestro enfoque combina rigor técnico, constructibilidad y estrecha coordinación con arquitectos, contratistas y otras disciplinas de ingeniería.',
  },
  contact: {
    aboutTitle: 'Sobre Civera',
    aboutText:
      'Civera Engineering es una práctica colaborativa de ingeniería enfocada en soluciones estructurales, civiles y multidisciplinarias para edificios y proyectos industriales.',
    aboutText2:
      'Nuestro trabajo combina análisis estructural, diseño práctico y documentación técnica clara en estructuras de hormigón armado y acero, fundaciones y soporte de ingeniería.',
    aboutText3:
      'Nuestro enfoque combina rigor técnico, constructibilidad y estrecha coordinación con arquitectos, contratistas y otras disciplinas de ingeniería.',
    formTitle: 'Consulte su proyecto',
    formIntro:
      'Cuéntenos sobre su proyecto y sus requerimientos. Revisaremos la información disponible y le propondremos un alcance de ingeniería adecuado.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      country: 'País',
      company: 'Empresa',
      projectType: 'Tipo de proyecto',
      message: 'Mensaje',
      upload: 'Cargar información del proyecto',
      uploadHint: 'PDF, DOCX, XLSX, DWG, DXF, IFC o ZIP (máx. 20 MB).',
      selectOption: 'Seleccione un tipo de proyecto',
    },
    projectTypes: {
      rc: 'Estructura de hormigón armado',
      steel: 'Estructura de acero',
      foundation: 'Ingeniería de fundaciones',
      connections: 'Conexiones metálicas',
      documentation: 'Documentación de ingeniería',
      review: 'Revisión técnica',
      other: 'Otro',
    },
    submit: 'Enviar consulta',
    success: 'Gracias. Su consulta fue recibida. Le responderemos a la brevedad.',
    error: 'Ocurrió un error al enviar el formulario. Revise los campos marcados.',
    getInTouchTitle: 'Contacto',
    email: 'info@civeraeng.com',
    linkedin: 'LinkedIn',
    location: 'Operamos internacionalmente',
    operatingTitle: 'Operamos internacionalmente',
    operatingText: 'Con base entre Europa y Argentina, damos soporte a proyectos en mercados internacionales.',
    validation: {
      required: 'Este campo es obligatorio.',
      email: 'Ingrese un email válido.',
      fileType: 'Tipo de archivo no aceptado.',
      fileSize: 'El archivo supera 20 MB.',
    },
  },
  footer: {
    tagline: 'Ingeniería estructural y multidisciplinaria para edificios y proyectos industriales.',
    navTitle: 'Navegar',
    contactTitle: 'Contacto',
    legal: 'Aviso legal',
    privacy: 'Política de privacidad',
    rights: 'Todos los derechos reservados.',
  },
  project: {
    breadcrumbHome: 'Inicio',
    breadcrumbProjects: 'Proyectos',
    category: 'Categoría del proyecto',
    previousExperienceNote:
      'Este proyecto forma parte de la experiencia profesional previa del equipo de ingeniería que hoy opera bajo Civera.',
    keyInfoTitle: 'Información clave del proyecto',
    keyInfo: {
      name: 'Nombre del proyecto',
      type: 'Tipo de proyecto',
      location: 'Ubicación',
      detailedLocation: 'Ubicación detallada',
      status: 'Estado',
      year: 'Año',
      period: 'Período del proyecto',
      levels: 'Niveles',
      floorDimensions: 'Dimensiones aproximadas por planta',
      typicalFloorArea: 'Superficie de planta típica',
      area: 'Superficie estructural aproximada',
      residentialLayout: 'Configuración residencial',
      elevators: 'Ascensores',
      software: 'Software',
      structural: 'Sistema estructural',
      foundation: 'Sistema de fundaciones',
    },
    overviewTitle: 'Resumen del proyecto',
    scopeTitle: 'Alcance de los servicios',
    challengeTitle: 'Desafío de ingeniería y enfoque',
    galleryTitle: 'Galería de imágenes',
    galleryCategories: {
      completed: 'Edificio terminado',
      construction: 'Avance de obra',
      reinforcement: 'Armaduras y hormigonado',
      model: 'Modelo 3D estructural',
      render: 'Render arquitectónico',
      drawings: 'Planos estructurales',
      foundation: 'Planos de fundación',
      details: 'Detalles técnicos',
    },
    civeraTitle: 'Alcance de Civera',
    confidentialityTitle: 'Confidencialidad',
    confidentiality:
      'La información, planos e imágenes del proyecto pueden estar parcialmente anonimizados para proteger la confidencialidad del cliente y la información contractual.',
    navPrev: 'Proyecto anterior',
    navBack: 'Volver a proyectos',
    navNext: 'Proyecto siguiente',
    navDiscuss: 'Consultar un proyecto similar',
    placeholder: '[Información a proporcionar]',
    imagePlaceholder: 'Imagen de referencia',
  },
  legal: {
    title: 'Aviso legal',
    p1: 'CIVERA es una práctica de ingeniería y diseño técnico enfocada en servicios de ingeniería estructural, civil y multidisciplinaria.',
    p2: 'Este sitio web presenta los servicios de CIVERA, sus capacidades técnicas, su trabajo de diseño y la experiencia profesional previa de los profesionales que hoy colaboran bajo el nombre CIVERA.',
    p3: 'La información y el contenido técnico de los proyectos presentados en este sitio se proporcionan con fines informativos y de portfolio. No constituyen asesoramiento de ingeniería específico de un proyecto ni sustituyen los cálculos, la documentación técnica o la evaluación profesional realizados específicamente para un proyecto en particular.',
    p4: 'Salvo indicación en contrario, el contenido del sitio, textos, gráficos y material visual original no puede reproducirse, modificarse ni utilizarse comercialmente sin autorización previa del titular de los derechos correspondientes.',
    p5: 'La información de contacto oficial se ofrece a través del correo electrónico publicado en este sitio.',
    temporaryNote:
      'CIVERA aún no se encuentra formalmente registrada como empresa. Los datos societarios (número de registro, VAT ID, director gerente, domicilio fiscal) se incorporarán una vez completada la registración formal.',
  },
  privacy: {
    title: 'Política de privacidad',
    intro:
      'CIVERA respeta la privacidad de los usuarios que visitan este sitio web y procesa información personal únicamente cuando es necesario para responder consultas y evaluar potenciales proyectos de ingeniería o relaciones comerciales.',
    contactFormTitle: 'Formulario de contacto',
    contactFormText:
      'Cuando un usuario contacta a CIVERA a través del sitio web, información como nombre, empresa, email, país, información del proyecto, mensaje y documentos cargados voluntariamente puede ser procesada con el fin de revisar y responder la consulta.',
    useOfInformationTitle: 'Uso de la información',
    useOfInformationText:
      'La información enviada a través del sitio será utilizada únicamente en relación con la consulta correspondiente, el potencial proyecto o la comunicación comercial, y no será vendida ni utilizada con fines de marketing no relacionados.',
    fileUploadsTitle: 'Archivos adjuntos',
    fileUploadsText:
      'Los documentos enviados voluntariamente a través del formulario de consulta se utilizan únicamente para evaluar y responder a la consulta correspondiente. Se recomienda evitar el envío de información personal, sensible o confidencial innecesaria.',
    retentionTitle: 'Conservación de datos',
    retentionText:
      'La información personal se conservará únicamente durante el tiempo razonablemente necesario para responder consultas, evaluar potenciales proyectos y gestionar comunicaciones comerciales relevantes.',
    providersTitle: 'Proveedores de servicios',
    providersText:
      'Los proveedores de hosting, correo electrónico y procesamiento de formularios pueden procesar información técnica o de contacto limitada cuando sea necesario para operar el sitio y prestar estos servicios.',
    userRequestsTitle: 'Solicitudes de usuarios',
    userRequestsText:
      'Los usuarios pueden solicitar el acceso, la corrección o la eliminación de la información personal que hayan enviado, contactando a CIVERA a través del email oficial publicado en el sitio web.',
    updatesTitle: 'Actualizaciones futuras',
    updatesText:
      'Esta Política de privacidad podrá ser actualizada a medida que evolucione la estructura legal de CIVERA, la funcionalidad del sitio y los proveedores de servicios.',
  },
  common: {
    skipToContent: 'Saltar al contenido principal',
    close: 'Cerrar',
    previous: 'Anterior',
    next: 'Siguiente',
  },
};

export default dict;
