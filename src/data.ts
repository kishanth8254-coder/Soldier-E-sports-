/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tournament, SocialLink, FAQItem } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@soldier_esports',
    iconName: 'tiktok',
    colorClass: 'hover:text-[#ff0050] hover:border-[#ff0050]',
    highlightColor: 'from-[#ff0050] to-[#00f2fe]',
    followerCount: '25K+'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/soldier_esports_',
    iconName: 'instagram',
    colorClass: 'hover:text-[#e1306c] hover:border-[#e1306c]',
    highlightColor: 'from-[#fccc63] via-[#fbad50] to-[#e1306c]',
    followerCount: '18K+'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1CvXGNC4Km/',
    iconName: 'facebook',
    colorClass: 'hover:text-[#1877f2] hover:border-[#1877f2]',
    highlightColor: 'from-[#1877f2] to-[#00c6ff]',
    followerCount: '12K+'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Soldier_Esports',
    iconName: 'youtube',
    colorClass: 'hover:text-[#ff0000] hover:border-[#ff0000]',
    highlightColor: 'from-[#ff0000] to-[#ff4e50]',
    followerCount: '45K+'
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: 'SOLDIER INVITATIONAL SEASON 4',
    game: 'PUBG Mobile',
    prizePool: 'LKR 350,000',
    entryFee: 'LKR 1,500',
    dateTime: 'June 25, 2026 - 18:00 UTC+5:30',
    slotsTotal: 64,
    slotsFilled: 48,
    status: 'upcoming',
    platform: 'Mobile'
  },
  {
    id: 't2',
    title: 'FREE FIRE ULTRA SQUAD CLASH',
    game: 'Garena Free Fire',
    prizePool: 'LKR 200,000',
    entryFee: 'LKR 1,000',
    dateTime: 'July 02, 2026 - 19:00 UTC+5:30',
    slotsTotal: 32,
    slotsFilled: 24,
    status: 'upcoming',
    platform: 'Mobile'
  },
  {
    id: 't3',
    title: 'SOLDIER APEX SHATTERDOME',
    game: 'Apex Legends Mobile',
    prizePool: 'LKR 150,000',
    entryFee: 'Free Entry',
    dateTime: 'June 18, 2026 - 17:30 UTC+5:30',
    slotsTotal: 20,
    slotsFilled: 20,
    status: 'completed',
    platform: 'Mobile'
  },
  {
    id: 't4',
    title: 'VALORANT TACTICAL MAYHEM',
    game: 'Valorant (PC)',
    prizePool: 'LKR 500,000',
    entryFee: 'LKR 2,500',
    dateTime: 'July 15, 2026 - 15:00 UTC+5:30',
    slotsTotal: 16,
    slotsFilled: 8,
    status: 'upcoming',
    platform: 'PC'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I register for a tournament?',
    answer: 'Select any active tournament card labeled "REGISTRATION OPEN", click the "REGISTER NOW" button, fill in your Team Name, Captain Contact, and game Player IDs for all four squad members, and submit. An administrator will review your submission and contact you via email or mobile with details.'
  },
  {
    question: 'Are tournament payments secured?',
    answer: 'Yes. Payments for registrations or subscriptions are handled strictly through standard fully secured third-party payment gateways. Soldier E-Sports does not store or process your card or bank credentials on our servers.'
  },
  {
    question: 'What is your refund policy?',
    answer: 'In general, tournament entry fees are non-refundable. However, inside our Terms & Conditions, refunds are eligible under verified circumstances (such as terminal errors or team placement cancellation by the Soldier E-Sports board) requested through support.'
  },
  {
    question: 'How are game hacks and bug exploiters handled?',
    answer: 'Cheating, scripting, matching-fixing, bug exploiting, or using external hacks is strictly prohibited. Tournament admin decisions are absolute and final; violators face a permanent team ban and account deletion.'
  }
];

export const PRIVACY_POLICY = {
  lastUpdated: 'May 17, 2026',
  sections: [
    {
      title: 'Welcome to Soldier E-Sports.',
      content: 'Your privacy is important to us. This Privacy Policy explains how Soldier E-Sports collects, uses, stores, and protects user information when using our mobile application and related services. By using our platform, you agree to this Privacy Policy.'
    },
    {
      title: '1. Information We Collect',
      items: [
        { label: 'Personal Information', text: 'Username, Email address, Profile picture, Date of birth, Mobile number (optional)' },
        { label: 'Gaming Information', text: 'Player IDs, Tournament participation details, Match history, Rankings and gameplay statistics' },
        { label: 'Device Information', text: 'Device type, Operating system, IP address, App version, Device identifiers' },
        { label: 'Payment Information', text: 'Payments for tournaments, subscriptions, or other services are securely processed through third-party payment providers. Soldier E-Sports does not store debit or credit card information.' }
      ]
    },
    {
      title: '2. How We Use Information',
      items: [
        { text: 'Create and manage user accounts securely' },
        { text: 'Conduct tournaments, matches, and custom competitions' },
        { text: 'Display official leaderboards, match histories, and bracket rankings' },
        { text: 'Improve platform performance, responsiveness, and features' },
        { text: 'Provide stellar client support and dispute responses' },
        { text: 'Send real-time updates, security banners, and announcements' },
        { text: 'Detect and prevent fraud, hacking, cheating, or unauthorized behaviors' },
        { text: 'Maintain overall system integrity and fair competition' }
      ]
    },
    {
      title: '3. Sharing of Information',
      content: 'We absolutely do not sell or rent user data. Information is only shared with secure third-party billing providers, specialized esports organizers, performance analyzers, and legal institutions under lawful demand.'
    },
    {
      title: '4. Data Security',
      content: 'We enforce premium commercial-level firewalls and encryption filters to secure user records and safeguard accounts. However, note that no online portal is fully secure from security breaches.'
    },
    {
      title: '5. Children’s Privacy',
      content: 'Esports participants under 13 should operate on our platform only under the direct supervision and authorization of parents or clear legal guardians. We may immediately delete children\'s data if collected without permit.'
    },
    {
      title: '6. Cookies & Analytics',
      content: 'We employ modern analytics tools, performance checkers, and crash reports to monitor response times, visual layout rendering, and ensure general app stability.'
    },
    {
      title: '7. Third-Party Services',
      content: 'Soldier E-Sports integrates with Google Play Services, Apple App Store, Discord, YouTube, and payment systems. Please refer to their respective terms and policies.'
    },
    {
      title: '8. User Rights',
      content: 'You reserve complete rights to access your esports profile, submit a revision query, opt out of marketing logs, or permanently request account deletion by emailing support@soldieresports.com.'
    },
    {
      title: '9. Policy Updates',
      content: 'We can revise this policy anytime. The newest variants will be published directly inside our application. Continued engagement constitutes automatic endorsement.'
    }
  ]
};

export const TERMS_AND_CONDITIONS = {
  lastUpdated: 'May 17, 2026',
  sections: [
    {
      title: 'Eligibility Requirements',
      content: 'Users must be at least 13 years old to participate in Soldier E-Sports tournaments. By registering an account, you affirm that all info submitted is entirely credible and authentic.'
    },
    {
      title: 'User Accounts & Security',
      content: 'You hold total accountability for shielding private passwords and lock codes. Soldiers Esports retains the sole privilege to cancel any accounts showcasing signs of unauthorized exploitation.'
    },
    {
      title: 'Tournament Fair Play Rules',
      content: 'Every participant must act honorably. Standard offenses including using custom script packages, device root hacks, match rigging, map exploits, or external devices to gain an unfair edge will lead to immediate banishment. Tournament admin decisions are final.'
    },
    {
      title: 'Payments, Purchases & Refunds',
      content: 'Generally, tournament ticket items or pro badges are non-refundable. Refund triggers are managed on a custom case-by-case evaluation under our internal guidelines.'
    },
    {
      title: 'Prohibited Actions',
      content: 'Verbal aggression, racist remarks, offensive terms, visual slurs, duplicate logins, fake character IDs, and malicious server pings are fully restricted. Offending members will face immediate permanent suspension.'
    },
    {
      title: 'Intellectual Property Rights',
      content: 'All gaming brackets, graphical concepts, neon emblems, tactical designs, soldier characters, web scripts, and digital badges are protected properties under copyright laws. Code duplication or mirroring is prohibited.'
    },
    {
      title: 'Limitation of Liability',
      content: 'We are not responsible for cellular service pings, system crashes, hardware overloads, tournament delays due to server issues, or any game client bugs out of our tactical circle.'
    }
  ]
};
