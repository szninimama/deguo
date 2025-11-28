import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  isTyping?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum DualModelType {
  AUSBILDUNG = 'Ausbildung',
  DUALES_STUDIUM = 'Duales Studium'
}