/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageTab = 'home' | 'terms' | 'privacy';

export interface Tournament {
  id: string;
  title: string;
  game: string;
  prizePool: string;
  entryFee: string;
  dateTime: string;
  slotsTotal: number;
  slotsFilled: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  rulesLink?: string;
  platform: 'Mobile' | 'PC' | 'Console';
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: 'tiktok' | 'instagram' | 'facebook' | 'youtube';
  colorClass: string;
  highlightColor: string;
  followerCount?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
