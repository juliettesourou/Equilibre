import {
  BarChart3,
  Brush,
  Code2,
  Megaphone,
  Network,
  Share2,
  type LucideIcon,
} from 'lucide-react'
import serviceFacileLogo from '../assets/img/Logo Service Facile.png'
import soPlugLogo from '../assets/img/Logo SoPlug.png'
import raljmLogo from '../assets/img/Logo RALJM.png'
import crystalAgriLogo from '../assets/img/Logo CRYSTAL AGRI BUSINESS.png'
import chillsLogo from '../assets/img/Logo/Logo Chills.png'
import chronomateLogo from '../assets/img/Logo/Logo Chronomate.png'
import eclLogo from '../assets/img/Logo/logo ECL .png'
import macNegoceLogo from '../assets/img/Logo/Logo mac negoce .png'
import akizArtLogo from '../assets/img/Logo/Nouveau logo_AKIZ ART .png'
import octopusLogo from '../assets/img/Logo/Octopus 1.png'

export type ServiceItem = {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  details: string[]
  benefits: string[]
}

export const companyName = 'Equilibre Agency'
export const phoneDisplay = '(+229) 01 54 34 54 77'
export const phoneHref = 'tel:+2290154345477'
export const emailAddress = 'contact@equilibre.media'
export const whatsappHref =
  'https://wa.me/22954345477?text=Bonjour%20Equilibre%2C%20je%20souhaite%20vous%20contacter%20pour%20mon%20projet.'

export const services: ServiceItem[] = [
  {
    slug: 'strategie-digitale',
    icon: BarChart3,
    title: 'Stratégie digitale',
    description:
      "Nous accompagnons les entreprises dans la mise en place d'une stratégie numérique claire pour renforcer leur présence en ligne et leur positionnement.",
    points: [
      'Augmenter la visibilité sur Internet',
      'Développer la notoriété de la marque',
      'Analyser les performances digitales',
    ],
    details: [
      "Audit de l'existant et analyse du positionnement digital.",
      'Définition des objectifs, des cibles et des canaux prioritaires.',
      "Mise en place d'un plan d'action mesurable et réaliste.",
    ],
    benefits: ['Vision claire', 'Priorités structurées', 'Pilotage par la performance'],
  },
  {
    slug: 'communication-digitale',
    icon: Share2,
    title: 'Communication digitale',
    description:
      "Nous concevons une communication à 360 degrés pour garantir une présence cohérente sur l'ensemble des canaux digitaux.",
    points: [
      'Stratégie de communication adaptée',
      'Présence cohérente sur les canaux',
      'Visibilité de marque renforcée',
    ],
    details: [
      'Création de lignes éditoriales adaptées à chaque audience.',
      'Organisation des prises de parole sur les réseaux et les supports web.',
      'Coordination des messages pour une image de marque homogène.',
    ],
    benefits: ['Message cohérent', 'Image forte', 'Engagement renforcé'],
  },
  {
    slug: 'ads-trafic',
    icon: Megaphone,
    title: 'Ads & Trafic',
    description:
      "Nous pilotons vos campagnes publicitaires et vos leviers d'acquisition pour attirer une audience qualifiée et générer des résultats mesurables.",
    points: [
      'Campagnes sponsorisées ciblées',
      'Acquisition de trafic qualifié',
      'Optimisation continue des performances',
    ],
    details: [
      'Déploiement de campagnes Meta, LinkedIn et autres plateformes pertinentes selon vos objectifs.',
      "Création de messages et d'annonces pensés pour la visibilité, le clic et la conversion.",
      "Suivi des sources de trafic, analyse des performances et ajustements continus pour améliorer le retour sur investissement.",
    ],
    benefits: ['Audience qualifiée', 'Trafic utile', 'Résultats mesurables'],
  },
  {
    slug: 'developpement-web',
    icon: Code2,
    title: 'Développement web',
    description:
      'Nous développons des solutions numériques sur mesure avec des technologies modernes, selon les besoins des clients.',
    points: [
      'Sites web et applications web',
      'Applications mobiles et logiciels',
      'ERP et outils sur mesure',
    ],
    details: [
      "Conception de sites vitrines, plateformes métiers et outils internes.",
      "Développement d'interfaces modernes, rapides et adaptées au mobile.",
      'Intégration avec vos outils et workflows existants.',
    ],
    benefits: ['Outils sur mesure', 'Expérience fluide', 'Base technique solide'],
  },
  {
    slug: 'creation-de-contenu',
    icon: Brush,
    title: 'Création de contenu',
    description:
      "Nous accompagnons les entreprises dans la construction d'une identité visuelle forte, créative et mémorable.",
    points: [
      'Logos et chartes graphiques',
      'Visuels et contenus éditoriaux',
      'Image de marque originale',
    ],
    details: [
      'Conception de visuels alignés avec votre identité de marque.',
      'Production de contenus éditoriaux pensés pour informer et convaincre.',
      'Déclinaison cohérente sur les supports print et digitaux.',
    ],
    benefits: ['Identité forte', 'Contenus utiles', 'Marque mémorable'],
  },
  {
    slug: 'externalisation-de-services',
    icon: Network,
    title: 'Externalisation de services',
    description:
      "Nous mettons à disposition notre expertise pour prendre en charge certaines missions techniques à coût compétitif.",
    points: [
      'Sous-traitance de missions ciblées',
      'Ressources et expertise dédiées',
      'Prestations fiables et rentables',
    ],
    details: [
      'Renfort ponctuel ou régulier sur vos projets digitaux.',
      'Prise en charge opérationnelle de missions définies avec vos équipes.',
      'Méthode de suivi claire pour garantir qualité et réactivité.',
    ],
    benefits: ['Souplesse', 'Gain de temps', 'Expertise mobilisable rapidement'],
  },
]

export const partnerLogos = [
  { src: serviceFacileLogo, alt: 'Logo Service Facile' },
  { src: soPlugLogo, alt: 'Logo SoPlug' },
  { src: raljmLogo, alt: 'Logo Résidence Autonomie Les Jardins du Marais' },
  { src: crystalAgriLogo, alt: 'Logo Crystal Agri Business' },
  { src: serviceFacileLogo, alt: 'Logo Service Facile secondaire' },
  { src: soPlugLogo, alt: 'Logo SoPlug secondaire' },
  { src: raljmLogo, alt: 'Logo Résidence Autonomie Les Jardins du Marais secondaire' },
  { src: crystalAgriLogo, alt: 'Logo Crystal Agri Business secondaire' },
]

export const secondaryPartnerLogos = [
  { src: chillsLogo, alt: 'Logo Chills' },
  { src: chronomateLogo, alt: 'Logo Chronomate' },
  { src: eclLogo, alt: 'Logo ECL' },
  { src: macNegoceLogo, alt: 'Logo Mac Negoce' },
  { src: akizArtLogo, alt: 'Logo Akiz Art' },
  { src: octopusLogo, alt: 'Logo Octopus Consulting' },
  { src: chillsLogo, alt: 'Logo Chills secondaire' },
  { src: chronomateLogo, alt: 'Logo Chronomate secondaire' },
  { src: eclLogo, alt: 'Logo ECL secondaire' },
  { src: macNegoceLogo, alt: 'Logo Mac Negoce secondaire' },
  { src: akizArtLogo, alt: 'Logo Akiz Art secondaire' },
  { src: octopusLogo, alt: 'Logo Octopus Consulting secondaire' },
]

export const legalNoticeSections = [
  {
    title: 'Éditeur du site',
    text: `${companyName} met à disposition ce site pour présenter ses services, ses réalisations et ses informations de contact.`,
  },
  {
    title: 'Propriété intellectuelle',
    text: "Les contenus du site, textes, visuels, éléments graphiques et marques restent protégés. Toute reproduction non autorisée est interdite.",
  },
  {
    title: 'Responsabilité',
    text: "Nous faisons notre possible pour maintenir des informations exactes et à jour, sans pouvoir garantir l'absence totale d'erreurs ou d'interruptions.",
  },
]

export const privacySections = [
  {
    title: 'Données collectées',
    text: 'Les informations envoyées via le formulaire de contact sont limitées aux données nécessaires pour répondre à votre demande.',
  },
  {
    title: 'Utilisation',
    text: 'Ces données sont utilisées uniquement pour traiter les messages entrants, reprendre contact et assurer le suivi commercial demandé.',
  },
  {
    title: 'Cookies',
    text: "Le site peut enregistrer un choix de consentement pour l'affichage de la bannière RGPD et améliorer votre navigation.",
  },
]
