export interface Project {
  id: string;
  brand: string;
  category: string;
  campaignType: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  heroVideoPoster?: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  formats: string[];
  highlight: string;
}

export interface ClientCategory {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  focus: string;
  typicalDeliverables: string;
}
