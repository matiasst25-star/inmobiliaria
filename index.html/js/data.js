// Property data for the real estate website
var properties = [
  {
    id: 1,
    title: "Departamento luminoso en Palermo",
    type: "departamento",
    operation: "venta",
    location: "Palermo, Buenos Aires",
    price: 185000,
    currency: "USD",
    rooms: 3,
    bathrooms: 2,
    coveredArea: 85,
    totalArea: 90,
    description: "Hermoso departamento de 3 ambientes con excelente luminosidad natural. Ubicado en el corazón de Palermo, a pasos de la plaza y transporte público. Cocina integrada, balcón corrido y lavadero independiente. Edificio con amenities: pileta, gimnasio y SUM.",
    features: ["Balcón", "Cocina integrada", "Pileta", "Gimnasio", "SUM", "Seguridad 24hs"],
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"]
  },
  {
    id: 2,
    title: "Casa moderna en Belgrano",
    type: "casa",
    operation: "venta",
    location: "Belgrano, Buenos Aires",
    price: 450000,
    currency: "USD",
    rooms: 4,
    bathrooms: 3,
    coveredArea: 220,
    totalArea: 350,
    description: "Impresionante casa de 4 ambientes con diseño contemporáneo. Living comedor con doble altura, cocina de diseño con isla central. Suite principal con vestidor y baño en suite. Jardín con parrilla y pileta climatizada. Garage para 2 autos.",
    features: ["Jardín", "Pileta climatizada", "Parrilla", "Garage doble", "Suite principal", "Doble altura"],
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"]
  },
  {
    id: 3,
    title: "Monoambiente en Recoleta",
    type: "departamento",
    operation: "alquiler",
    location: "Recoleta, Buenos Aires",
    price: 850,
    currency: "USD",
    rooms: 1,
    bathrooms: 1,
    coveredArea: 38,
    totalArea: 38,
    description: "Moderno monoambiente totalmente equipado para vivir. Ubicación inmejorable frente al Cementerio de la Recoleta. Ideal para profesionales jóvenes o inversores. Edificio de categoría con seguridad 24 horas.",
    features: ["Amoblado", "Equipado", "Seguridad 24hs", "Luminoso", "Céntrico"],
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"]
  },
  {
    id: 4,
    title: "PH reciclado en Villa Crespo",
    type: "ph",
    operation: "venta",
    location: "Villa Crespo, Buenos Aires",
    price: 165000,
    currency: "USD",
    rooms: 2,
    bathrooms: 1,
    coveredArea: 75,
    totalArea: 95,
    description: "Encantador PH completamente reciclado a nuevo. Planta baja con living comedor integrado a la cocina y patio. Planta alta con dormitorio principal y terraza propia. Materiales de primera calidad. Sin expensas.",
    features: ["Patio", "Terraza", "Sin expensas", "Reciclado", "2 plantas"],
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"]
  },
  {
    id: 5,
    title: "Departamento con vista al río en Puerto Madero",
    type: "departamento",
    operation: "venta",
    location: "Puerto Madero, Buenos Aires",
    price: 520000,
    currency: "USD",
    rooms: 3,
    bathrooms: 2,
    coveredArea: 120,
    totalArea: 140,
    description: "Espectacular departamento con vista panorámica al río y a la Ciudad. Piso alto en torre premium. Amenities completos: pileta cubierta y descubierta, gimnasio, spa, salón de eventos. Cochera incluida.",
    features: ["Vista al río", "Pileta cubierta", "Gimnasio", "Spa", "Cochera", "Alta gama"],
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"]
  },
  {
    id: 6,
    title: "Local comercial en Caballito",
    type: "local",
    operation: "alquiler",
    location: "Caballito, Buenos Aires",
    price: 1200,
    currency: "USD",
    rooms: 1,
    bathrooms: 1,
    coveredArea: 65,
    totalArea: 65,
    description: "Excelente local comercial sobre avenida principal. Gran vidriera con exposición. Ideal para rubros gastronómicos, retail o servicios. Habilitación comercial al día. Alta circulación peatonal.",
    features: ["Sobre avenida", "Gran vidriera", "Habilitado", "Alta circulación"],
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"]
  },
  {
    id: 7,
    title: "Departamento 2 ambientes en Núñez",
    type: "departamento",
    operation: "alquiler",
    location: "Núñez, Buenos Aires",
    price: 750,
    currency: "USD",
    rooms: 2,
    bathrooms: 1,
    coveredArea: 52,
    totalArea: 55,
    description: "Cómodo departamento de 2 ambientes en zona residencial de Núñez. A metros del tren y subte. Living con balcón, dormitorio con placard. Cocina separada con lavadero. Muy luminoso.",
    features: ["Balcón", "Luminoso", "Cerca transporte", "Placard"],
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"]
  },
  {
    id: 8,
    title: "Terreno en Colegiales",
    type: "terreno",
    operation: "venta",
    location: "Colegiales, Buenos Aires",
    price: 280000,
    currency: "USD",
    rooms: 0,
    bathrooms: 0,
    coveredArea: 0,
    totalArea: 300,
    description: "Oportunidad única: terreno de 300m² en zona en pleno desarrollo. Ideal para desarrollo inmobiliario o construcción unifamiliar. FOT 3.5. Excelente ubicación cercana a avenidas principales.",
    features: ["300 m²", "FOT 3.5", "Desarrollo", "Inversión"],
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"]
  },
  {
    id: 9,
    title: "Duplex en Palermo Hollywood",
    type: "departamento",
    operation: "venta",
    location: "Palermo, Buenos Aires",
    price: 295000,
    currency: "USD",
    rooms: 3,
    bathrooms: 2,
    coveredArea: 110,
    totalArea: 125,
    description: "Increíble duplex de 3 ambientes en la zona más buscada de Palermo. Planta baja con living comedor, cocina abierta y toilette. Planta alta con 2 dormitorios en suite. Terraza propia con parrilla. Cochera.",
    features: ["Duplex", "Terraza", "Parrilla", "Cochera", "2 en suite"],
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"]
  }
];

// Helper function to format price
function formatPrice(price, currency) {
  if (currency === 'USD') {
    return 'USD ' + price.toLocaleString('es-AR');
  }
  return '$ ' + price.toLocaleString('es-AR');
}

// Filter properties based on query params
function filterProperties(query) {
  return properties.filter(function (p) {
    if (query.operacion && p.operation !== query.operacion) return false;
    if (query.tipo && p.type !== query.tipo) return false;
    if (query.zona && p.location.indexOf(query.zona) === -1) return false;
    if (query.minPrecio && p.price < parseInt(query.minPrecio)) return false;
    if (query.maxPrecio && p.price > parseInt(query.maxPrecio)) return false;
    if (query.ambientes) {
      var amb = parseInt(query.ambientes);
      if (amb === 4) {
        if (p.rooms < 4) return false;
      } else {
        if (p.rooms !== amb) return false;
      }
    }
    return true;
  });
}

// Get property by ID
function getPropertyById(id) {
  return properties.find(function (p) {
    return p.id === parseInt(id);
  });
}

// INMO namespace for utility functions
window.INMO = {
  whatsappPhone: '5491163302617',

  whatsappUrl: function (message) {
    var msg = message || 'Hola, me gustaría recibir más información sobre sus propiedades.';
    return 'https://wa.me/' + this.whatsappPhone + '?text=' + encodeURIComponent(msg);
  },

  getQueryParams: function () {
    var params = {};
    var search = window.location.search.slice(1);
    if (search) {
      search.split('&').forEach(function (part) {
        var kv = part.split('=');
        params[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' '));
      });
    }
    return params;
  }
};
