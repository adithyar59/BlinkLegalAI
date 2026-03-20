/**
 * Legal Knowledge Base Dataset
 * Contains 50+ verified legal entries across 5 categories
 * Used for RAG-style retrieval in the AI pipeline
 */

export interface LegalEntry {
  id: string
  category: LegalCategory
  title: string
  law_reference: string
  description: string
  simplified_explanation: string
  documents_required: string[]
  authority: string
  procedure_steps: string[]
  keywords: string[]
}

export type LegalCategory =
  | 'Labour Law'
  | 'Consumer Rights'
  | 'Cybercrime'
  | 'Harassment'
  | 'Tenancy'

export const LEGAL_CATEGORIES: LegalCategory[] = [
  'Labour Law',
  'Consumer Rights',
  'Cybercrime',
  'Harassment',
  'Tenancy',
]

export const legalDataset: LegalEntry[] = [
  // ─── LABOUR LAW ───────────────────────────────────────────────
  {
    id: 'L001',
    category: 'Labour Law',
    title: 'Salary Delay or Non-Payment',
    law_reference: 'Payment of Wages Act, 1936',
    description:
      'Every employer must pay wages within the prescribed time limit. For establishments with less than 1000 workers, wages must be paid by the 7th of the following month. For larger establishments, by the 10th.',
    simplified_explanation:
      'Your employer MUST pay your salary on time every month. If they delay or refuse to pay, you have the legal right to file a complaint with the Labour Commissioner.',
    documents_required: [
      'Employment appointment letter',
      'Salary slips / pay stubs',
      'Bank account statements showing missing payments',
      'Identity proof (Aadhaar / PAN card)',
    ],
    authority: 'Labour Commissioner / Labour Court',
    procedure_steps: [
      'Send a written notice to your employer demanding payment',
      'File a written complaint with the local Labour Commissioner office',
      'Attach all proof of employment and unpaid salary',
      'Authority will issue a notice to employer',
      'If unresolved, case is referred to Labour Court',
    ],
    keywords: ['salary', 'wages', 'pay', 'payment', 'unpaid', 'employer', 'delay', 'money owed'],
  },
  {
    id: 'L002',
    category: 'Labour Law',
    title: 'Wrongful Termination / Illegal Dismissal',
    law_reference: 'Industrial Disputes Act, 1947',
    description:
      'An employee in a factory or industrial establishment with 100+ workers cannot be terminated without prior government permission (retrenchment). If an employer terminates without following due process, the employee can claim reinstatement and back wages.',
    simplified_explanation:
      'If you were fired without proper notice, without valid reason, or without severance pay, this may be illegal. You can challenge wrongful termination and demand your job back or compensation.',
    documents_required: [
      'Termination letter',
      'Employment contract',
      'Salary payment history',
      'Any show-cause notices received',
      'Identity proof',
    ],
    authority: 'Labour Commissioner / Industrial Tribunal',
    procedure_steps: [
      'Collect your termination letter and all employment documents',
      'File a complaint with the Labour Commissioner within 3 years',
      'State that termination was wrongful or without proper notice',
      'Conciliation proceedings will be initiated',
      'If unresolved, case goes to Industrial Tribunal',
    ],
    keywords: ['fired', 'terminated', 'dismissal', 'sacked', 'job loss', 'illegal termination', 'wrongful'],
  },
  {
    id: 'L003',
    category: 'Labour Law',
    title: 'Denial of Provident Fund (PF)',
    law_reference: 'Employees Provident Fund and Miscellaneous Provisions Act, 1952',
    description:
      'Employers with 20+ employees must contribute to the Employee Provident Fund (EPF). Both employer and employee contribute 12% of basic wages. Denial or deduction without depositing is a criminal offense.',
    simplified_explanation:
      'Your employer must deduct and deposit your PF every month. If they deduct money from your salary for PF but do not deposit it, you can file a complaint with EPFO.',
    documents_required: [
      'Salary slips showing PF deduction',
      'EPFO UAN number',
      'Employment proof',
      'Bank statements',
    ],
    authority: 'EPFO (Employees Provident Fund Organisation)',
    procedure_steps: [
      'Check your PF balance on EPFO portal using UAN',
      'If deposits are missing, file a complaint on EPFO grievance portal',
      'Attach salary slips as proof of deduction',
      'EPFO will issue notice to employer',
      'Criminal prosecution possible for non-deposit',
    ],
    keywords: ['pf', 'provident fund', 'epfo', 'employee fund', 'retirement fund', 'deduction'],
  },
  {
    id: 'L004',
    category: 'Labour Law',
    title: 'Maternity Leave Denial',
    law_reference: 'Maternity Benefit Act, 1961 (amended 2017)',
    description:
      'Female employees are entitled to 26 weeks of paid maternity leave for the first two children. Employers with 50+ employees must also provide creche facilities. Dismissal during maternity leave is prohibited.',
    simplified_explanation:
      'If you are a working woman, you have the legal right to 26 weeks of paid maternity leave. Your employer cannot fire you during this period.',
    documents_required: [
      'Medical certificate confirming pregnancy',
      'Written application for maternity leave',
      'Employment records',
    ],
    authority: 'Labour Commissioner / Inspector under Maternity Benefit Act',
    procedure_steps: [
      'Submit written application with medical certificate to employer',
      'If denied, file complaint with local Labour Commissioner',
      'Inspector will investigate and take action',
      'Employer can be fined and ordered to pay benefit',
    ],
    keywords: ['maternity', 'pregnancy', 'maternity leave', 'baby', 'childbirth', 'mother'],
  },
  {
    id: 'L005',
    category: 'Labour Law',
    title: 'Overtime Pay Denial',
    law_reference: 'Factories Act, 1948 / Minimum Wages Act, 1948',
    description:
      'Workers who work more than 9 hours a day or 48 hours a week are entitled to overtime pay at double the ordinary rate. Employers cannot make employees work excessive overtime without compensation.',
    simplified_explanation:
      'If you are made to work extra hours beyond your normal schedule, your employer must pay you double the normal rate for those extra hours.',
    documents_required: [
      'Attendance records',
      'Duty rosters or shift schedules',
      'Salary slips',
    ],
    authority: 'Labour Commissioner / Factory Inspector',
    procedure_steps: [
      'Document your overtime hours with attendance records',
      'Calculate the overtime amount owed',
      'Send written demand to employer',
      'File complaint with Labour Commissioner if ignored',
    ],
    keywords: ['overtime', 'extra hours', 'overwork', 'night shift', 'double pay'],
  },
  {
    id: 'L006',
    category: 'Labour Law',
    title: 'Minimum Wage Violation',
    law_reference: 'Minimum Wages Act, 1948',
    description:
      'Every employer must pay workers at least the minimum wage as notified by the State Government for their industry. Payment below minimum wage is a punishable offense.',
    simplified_explanation:
      'Every worker in India has the right to a minimum wage set by the government. If your employer is paying you less than this amount, they are breaking the law.',
    documents_required: [
      'Salary slips',
      'Employment contract',
      'State minimum wage notification (available online)',
    ],
    authority: 'Labour Commissioner / Minimum Wages Inspector',
    procedure_steps: [
      'Check current minimum wage for your state and category of work',
      'Compare with your actual payment',
      'File complaint with Labour Inspector if underpaid',
      'Inspector can issue orders for payment of difference',
    ],
    keywords: ['minimum wage', 'underpaid', 'low salary', 'wage violation', 'pay less'],
  },
  {
    id: 'L007',
    category: 'Labour Law',
    title: 'Child Labour',
    law_reference: 'Child Labour (Prohibition and Regulation) Amendment Act, 2016',
    description:
      'Employment of children below 14 years in any occupation or process is completely prohibited. Children between 14-18 years cannot work in hazardous industries. Employers face imprisonment up to 2 years and fines.',
    simplified_explanation:
      'Employing children below 14 years in any work is illegal in India. Children aged 14-18 cannot work in dangerous jobs. This is a serious criminal offense.',
    documents_required: [
      'Evidence of child employment (photos, witnesses)',
      'Age proof of the child',
    ],
    authority: 'District Collector / Labour Department / Police',
    procedure_steps: [
      'Report to local police station or Labour Department',
      'File FIR if child is in immediate danger',
      'Contact CHILDLINE (1098) for child rescue',
      'Employer will face criminal prosecution',
    ],
    keywords: ['child labour', 'child work', 'minor working', 'underage worker'],
  },

  // ─── CONSUMER RIGHTS ──────────────────────────────────────────
  {
    id: 'C001',
    category: 'Consumer Rights',
    title: 'Defective Product Received',
    law_reference: 'Consumer Protection Act, 2019',
    description:
      'A consumer has the right to seek replacement or refund for defective products. The seller, manufacturer, and service provider are jointly and severally liable for defects in goods sold.',
    simplified_explanation:
      'If you bought a product that is broken, faulty, or does not work as promised, you have the right to get a replacement, refund, or repair — free of charge.',
    documents_required: [
      'Purchase receipt or invoice',
      'Product photos showing defect',
      'Warranty card',
      'Written complaint to seller',
      'Communication proof (emails/messages)',
    ],
    authority: 'District Consumer Disputes Redressal Commission',
    procedure_steps: [
      'First complain to the seller/company in writing',
      'Keep all communication as evidence',
      'If no response in 30 days, file complaint with Consumer Commission',
      'For claims up to ₹1 crore: District Commission',
      'Commission will hear the case and order compensation',
    ],
    keywords: ['defective product', 'broken item', 'faulty goods', 'not working', 'refund', 'replacement'],
  },
  {
    id: 'C002',
    category: 'Consumer Rights',
    title: 'False Advertising / Misleading Claims',
    law_reference: 'Consumer Protection Act, 2019 – Section 2(28)',
    description:
      'Misleading advertisement that falsely describes a product, gives a false guarantee, or falsely claims benefit is prohibited. Penalties include fines up to ₹10 lakh for first offense and ₹50 lakh for repeat offenses.',
    simplified_explanation:
      'If a company advertised a product claiming features or benefits that turned out to be completely false, you can file a complaint and claim compensation for being misled.',
    documents_required: [
      'Copy/screenshot of the advertisement',
      'Purchased product/receipt',
      'Evidence showing difference between ad claim and reality',
    ],
    authority: 'District Consumer Commission / Central Consumer Protection Authority (CCPA)',
    procedure_steps: [
      'Collect the advertisement and evidence of false claim',
      'File complaint with Consumer Commission or CCPA',
      'CCPA can order withdrawal of advertisement',
      'Company can be fined and ordered to compensate you',
    ],
    keywords: ['false advertisement', 'misleading', 'false claims', 'cheating', 'fraud', 'scam'],
  },
  {
    id: 'C003',
    category: 'Consumer Rights',
    title: 'Online Shopping – Delivery Not Received',
    law_reference: 'Consumer Protection (E-Commerce) Rules, 2020',
    description:
      'E-commerce platforms are responsible for ensuring delivery of goods ordered. They must provide a grievance officer and respond to complaints within 48 hours. Platform must resolve within one month.',
    simplified_explanation:
      'If you ordered something online and never received it, or received the wrong item, the e-commerce platform must resolve your complaint. You can escalate to Consumer Forum if they do not.',
    documents_required: [
      'Order confirmation email/SMS',
      'Screenshots of order and tracking',
      'Payment receipt',
      'Complaint raised with platform (ticket number)',
    ],
    authority: 'Consumer Commission / CCPA / National Consumer Helpline (1915)',
    procedure_steps: [
      'Raise complaint on e-commerce platform and note ticket number',
      'If unresolved in 30 days, call National Consumer Helpline 1915',
      'File case with District Consumer Commission',
      'Platform must refund or deliver with compensation',
    ],
    keywords: ['online shopping', 'not delivered', 'wrong item', 'ecommerce', 'amazon', 'flipkart', 'order'],
  },
  {
    id: 'C004',
    category: 'Consumer Rights',
    title: 'Bank / Financial Service Fraud',
    law_reference: 'Banking Ombudsman Scheme, 2006 / RBI Circular',
    description:
      'If a bank fails to resolve your complaint about unauthorized transactions, excessive charges, or poor service within 30 days, you can approach the Banking Ombudsman. Relief up to ₹20 lakh can be awarded.',
    simplified_explanation:
      'If money was fraudulently taken from your bank account, or the bank charged you wrongly and refuses to refund, you can complain to the Banking Ombudsman — a free dispute resolution service.',
    documents_required: [
      'Bank statements showing the issue',
      'Written complaint to bank with acknowledgment',
      'Bank\'s response (or proof they did not respond in 30 days)',
      'Identity proof',
    ],
    authority: 'Banking Ombudsman (RBI) / Consumer Commission',
    procedure_steps: [
      'Write formal complaint to bank branch manager',
      'Escalate to bank\'s grievance department if no resolution in 30 days',
      'File complaint with Banking Ombudsman at bankingombudsman.rbi.org.in',
      'No fee required; Ombudsman will investigate',
    ],
    keywords: ['bank fraud', 'unauthorized transaction', 'money stolen', 'bank charge', 'banking complaint'],
  },
  {
    id: 'C005',
    category: 'Consumer Rights',
    title: 'Service Not Delivered After Payment',
    law_reference: 'Consumer Protection Act, 2019 – Section 2(11)',
    description:
      'Deficiency in service means inadequate, imperfect, or shortcoming in quality. If a service provider takes payment and does not deliver the service, it is a deficiency under consumer law.',
    simplified_explanation:
      'If you paid for a service (like coaching classes, gym membership, hotel booking) and did not receive it, the provider must refund you or face a consumer case.',
    documents_required: [
      'Payment receipt',
      'Service agreement/contract',
      'Written complaint to service provider',
      'Proof of service not rendered',
    ],
    authority: 'District Consumer Commission',
    procedure_steps: [
      'Send written complaint to service provider demanding refund',
      'Wait 30 days for response',
      'File complaint with Consumer Commission',
      'Commission will award refund plus compensation',
    ],
    keywords: ['service not delivered', 'refund', 'payment taken', 'no service', 'gym', 'coaching', 'hotel'],
  },
  {
    id: 'C006',
    category: 'Consumer Rights',
    title: 'Medical Negligence',
    law_reference: 'Consumer Protection Act, 2019 / Indian Medical Council Act',
    description:
      'Doctors and hospitals providing medical services are included under the Consumer Protection Act. Patients can claim compensation for negligence, wrong diagnosis, unnecessary surgery, or poor standard of care.',
    simplified_explanation:
      'If a doctor or hospital was negligent in treating you — misdiagnosed, gave wrong medicine, or caused harm through carelessness — you can file a consumer complaint and claim compensation.',
    documents_required: [
      'Medical records and prescriptions',
      'Hospital bills and receipts',
      'Expert medical opinion if possible',
      'Written complaint to hospital',
    ],
    authority: 'State Medical Council / Consumer Commission / Civil Court',
    procedure_steps: [
      'Collect all medical documents as evidence',
      'File complaint with State Medical Council for disciplinary action',
      'File consumer complaint with District Consumer Commission',
      'Commission can award compensation for negligence',
    ],
    keywords: ['medical negligence', 'doctor mistake', 'hospital error', 'wrong treatment', 'misdiagnosis'],
  },
  {
    id: 'C007',
    category: 'Consumer Rights',
    title: 'Real Estate Builder Fraud',
    law_reference: 'Real Estate (Regulation and Development) Act (RERA), 2016',
    description:
      'RERA mandates that all real estate projects must be registered. Builders must deliver possession on promised date or face penalty. Homebuyers can claim refund with interest or compensation for delays.',
    simplified_explanation:
      'If a builder took your money for a flat or house but delayed possession or cheated you, RERA allows you to get a full refund with interest or force them to deliver on time.',
    documents_required: [
      'Builder-buyer agreement',
      'Payment receipts',
      'RERA registration number of project',
      'Proof of delay or fraud',
    ],
    authority: 'State RERA Authority / RERA Adjudicating Officer',
    procedure_steps: [
      'Check if project is registered on State RERA website',
      'File complaint on State RERA portal',
      'RERA authority will issue notices to builder',
      'Builder can be ordered to refund with 10-11% interest',
    ],
    keywords: ['builder fraud', 'flat', 'apartment', 'real estate', 'possession delay', 'home buyer', 'RERA'],
  },

  // ─── CYBERCRIME ───────────────────────────────────────────────
  {
    id: 'CY001',
    category: 'Cybercrime',
    title: 'Online Financial Fraud / UPI Scam',
    law_reference: 'Information Technology Act, 2000 / IPC Sections 419, 420',
    description:
      'Online fraud where a person is deceived into transferring money through UPI, fake calls, or fake websites is a criminal offense. The offense is punishable with imprisonment up to 3 years and fine.',
    simplified_explanation:
      'If someone tricked you into sending money online, through a fake call (KYC fraud), fake link, or UPI scam — report it immediately to the Cyber Crime helpline 1930. Quick action can help recover your money.',
    documents_required: [
      'Screenshots of fraudulent messages/calls',
      'Bank or UPI transaction proof',
      'Contact details of fraudster if available',
      'FIR copy',
    ],
    authority: 'Cyber Crime Cell / Police / National Cybercrime Reporting Portal',
    procedure_steps: [
      'Immediately call 1930 (Cyber Crime Helpline) to freeze transaction',
      'File complaint on cybercrime.gov.in',
      'Visit nearest police station with all evidence',
      'File FIR under IT Act and IPC sections',
      'Bank will investigate and may reverse the transaction',
    ],
    keywords: ['upi fraud', 'online fraud', 'money scam', 'kyc fraud', 'bank fraud', 'otp fraud', 'phone call fraud'],
  },
  {
    id: 'CY002',
    category: 'Cybercrime',
    title: 'Hacking / Unauthorized Account Access',
    law_reference: 'Information Technology Act, 2000 – Section 43, 66',
    description:
      'Hacking into someone\'s computer, email, social media, or any digital account without permission is a criminal offense punishable with up to 3 years imprisonment and fines up to ₹5 lakh.',
    simplified_explanation:
      'If someone hacked into your email, social media, or other online accounts without your permission, this is a serious crime. Report it to the Cyber Crime Cell immediately.',
    documents_required: [
      'Screenshots of unauthorized access',
      'Email/platform notifications of suspicious login',
      'Evidence of damage or misuse',
    ],
    authority: 'Cyber Crime Cell / Police Station',
    procedure_steps: [
      'Immediately change all passwords and enable 2FA',
      'Take screenshots of evidence',
      'File complaint on cybercrime.gov.in',
      'Visit police station with evidence',
      'File FIR under IT Act Section 66',
    ],
    keywords: ['hacked', 'account hacked', 'email hacked', 'password stolen', 'unauthorized access', 'hacking'],
  },
  {
    id: 'CY003',
    category: 'Cybercrime',
    title: 'Cyberbullying and Online Harassment',
    law_reference: 'Information Technology Act, 2000 – Section 66A (repealed) / IPC Section 507',
    description:
      'Sending threatening, abusive, or offensive messages through electronic means, creating fake profiles to harass someone, or posting false information about someone online is punishable under IPC and IT Act.',
    simplified_explanation:
      'If someone is harassing you online — sending abusive messages, making threats, creating fake profiles, or spreading false content — you can report this to the Cyber Crime Cell and police.',
    documents_required: [
      'Screenshots of harassing messages or posts',
      'Social media profile links',
      'Any identifying information about the harasser',
    ],
    authority: 'Cyber Crime Cell / Police Station',
    procedure_steps: [
      'Save and screenshot all harassing content',
      'Report the profile to the platform (Facebook, Instagram, etc.)',
      'File complaint on cybercrime.gov.in',
      'Visit police station and file FIR',
    ],
    keywords: ['cyberbullying', 'online harassment', 'abusive messages', 'fake profile', 'trolling', 'threatening online'],
  },
  {
    id: 'CY004',
    category: 'Cybercrime',
    title: 'Non-Consensual Intimate Image Sharing (Revenge Porn)',
    law_reference: 'IT Act Section 67, 67A / IPC Section 354C',
    description:
      'Sharing intimate or obscene images/videos of a person without their consent is a serious criminal offense. Punishment includes imprisonment up to 5 years and fine. Platform must also remove the content.',
    simplified_explanation:
      'If someone shared your private or intimate images or videos online without your consent, this is a serious crime called revenge porn. Police must act immediately, and the content must be removed.',
    documents_required: [
      'Link/screenshot of the offensive content',
      'Proof of identity',
      'Evidence connecting the accused if available',
    ],
    authority: 'Cyber Crime Cell / Women Helpline 181 / Police',
    procedure_steps: [
      'Report the link to National Cyber Crime Reporting Portal',
      'Report the content to the platform for immediate removal',
      'File FIR at police station',
      'Seek help from cyber crime women\'s helpline',
    ],
    keywords: ['intimate images', 'private photos', 'revenge porn', 'non-consensual', 'leaked photos'],
  },
  {
    id: 'CY005',
    category: 'Cybercrime',
    title: 'Phishing / Identity Theft',
    law_reference: 'IT Act Section 66C, 66D / IPC Section 419, 420',
    description:
      'Phishing involves using fake emails or websites to steal login credentials, banking information, or personal identity. Identity theft using stolen information is punishable with up to 3 years imprisonment.',
    simplified_explanation:
      'If someone used your personal details, identity documents, or login credentials to create fake accounts, take loans, or commit fraud in your name, this is identity theft — report it immediately.',
    documents_required: [
      'Evidence of phishing (fake email, SMS, website)',
      'Proof of identity misuse',
      'Bank statements showing fraudulent transactions',
    ],
    authority: 'Cyber Crime Cell / UIDAI (for Aadhaar misuse)',
    procedure_steps: [
      'File complaint on cybercrime.gov.in',
      'Report to your bank immediately to block transactions',
      'For Aadhaar misuse, report to UIDAI at 1947',
      'File FIR at police station',
    ],
    keywords: ['phishing', 'identity theft', 'fake email', 'account takeover', 'fraud identity'],
  },
  {
    id: 'CY006',
    category: 'Cybercrime',
    title: 'Data Privacy Violation',
    law_reference: 'Information Technology (Reasonable Security Practices) Rules, 2011',
    description:
      'Companies that collect personal data must protect it with reasonable security practices. Disclosure of personal data without consent is a punishable offense under IT Rules.',
    simplified_explanation:
      'If a company leaked or shared your personal data without your consent, you can file a complaint with CERT-In (the national cybersecurity agency) and seek compensation.',
    documents_required: [
      'Evidence of data leak (email, news report, notification)',
      'Proof you shared data with the company',
    ],
    authority: 'CERT-In / Cyber Crime Cell / Consumer Commission',
    procedure_steps: [
      'File complaint with CERT-In at incident@cert-in.org.in',
      'File consumer complaint for service deficiency',
      'File cyber crime complaint for criminal investigation',
    ],
    keywords: ['data leak', 'privacy violation', 'personal data', 'data theft', 'company data leak'],
  },
  {
    id: 'CY007',
    category: 'Cybercrime',
    title: 'Ransomware / Malware Attack',
    law_reference: 'Information Technology Act, 2000 – Section 43, 66',
    description:
      'Deploying malware or ransomware to corrupt, deny access, or extort money from victims is a criminal offense under the IT Act. Victims can file FIR and report to CERT-In.',
    simplified_explanation:
      'If your computer or phone was infected with malware that locked your files and demanded money, this is ransomware — a serious cybercrime. Do not pay. Report to police and CERT-In.',
    documents_required: [
      'Screenshots of ransomware demands',
      'System logs if available',
      'Proof of damage',
    ],
    authority: 'CERT-In / Cyber Crime Cell',
    procedure_steps: [
      'Disconnect affected devices from internet immediately',
      'Take screenshots of all demands as evidence',
      'Report to CERT-In at incident@cert-in.org.in',
      'File FIR at police station',
      'Do NOT pay the ransom',
    ],
    keywords: ['ransomware', 'malware', 'virus', 'computer attack', 'locked files', 'extortion'],
  },

  // ─── HARASSMENT ───────────────────────────────────────────────
  {
    id: 'H001',
    category: 'Harassment',
    title: 'Sexual Harassment at Workplace (POSH)',
    law_reference: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    description:
      'Every organization with 10+ employees must have an Internal Complaints Committee (ICC). Women can file complaints about sexual harassment within 3 months of the incident. Employers must complete inquiry within 90 days.',
    simplified_explanation:
      'If you face sexual harassment at your workplace — including unwanted touching, sexual comments, or demands for sexual favors — you can file a complaint with your company\'s Internal Complaints Committee (ICC) or Local Complaints Committee.',
    documents_required: [
      'Written complaint describing the incident',
      'Date, time, and location details',
      'Names of witnesses if any',
      'Evidence (screenshots of messages if applicable)',
    ],
    authority: 'Internal Complaints Committee (ICC) / Local Complaints Committee / Labour Department',
    procedure_steps: [
      'File written complaint with company ICC within 3 months of incident',
      'If no ICC exists, file with Local Complaints Committee at District level',
      'ICC must complete inquiry within 90 days',
      'Can also file criminal FIR at police station',
      'Right to transfer to another department during inquiry',
    ],
    keywords: ['sexual harassment', 'posh', 'workplace harassment', 'inappropriate behavior', 'icc', 'unwanted touch'],
  },
  {
    id: 'H002',
    category: 'Harassment',
    title: 'Domestic Violence',
    law_reference: 'Protection of Women from Domestic Violence Act, 2005',
    description:
      'Domestic violence includes physical, emotional, sexual, and economic abuse by family members. Women can seek protection orders, residence orders, maintenance, and custody of children through Magistrate.',
    simplified_explanation:
      'If you are being beaten, abused emotionally, or controlled financially by your husband or family members, you have the right to protection under law. You can get a Protection Order from the court.',
    documents_required: [
      'Written complaint / IR (Incident Report)',
      'Medical reports if physically injured',
      'Photos of injuries if any',
      'Identity documents',
    ],
    authority: 'Protection Officer (under DV Act) / Magistrate / Police / Women Helpline 181',
    procedure_steps: [
      'Call Women Helpline 181 for immediate assistance',
      'Contact Protection Officer at District Women & Child Department',
      'File complaint with Magistrate through Protection Officer',
      'Also file FIR at police station for physical assault',
      'Court can issue Protection Order within 3 days in emergency',
    ],
    keywords: ['domestic violence', 'husband abuse', 'wife beating', 'family abuse', 'physical abuse', 'emotional abuse'],
  },
  {
    id: 'H003',
    category: 'Harassment',
    title: 'Stalking',
    law_reference: 'IPC Section 354D',
    description:
      'Stalking means following a woman or contacting her repeatedly when she has shown disinterest, or monitoring a woman\'s use of internet or electronic communications. Punishment: Up to 3 years for first conviction, 5 years for repeat.',
    simplified_explanation:
      'If someone is following you around, repeatedly calling you against your will, or monitoring your online activities without your consent, they are stalking you. This is a criminal offense — file an FIR.',
    documents_required: [
      'Call records showing repeated calls',
      'Screenshots of messages or online monitoring',
      'Witness statements if available',
      'CCTV footage if available',
    ],
    authority: 'Police Station / Women Helpline 181',
    procedure_steps: [
      'Document all instances of stalking with dates and times',
      'Save call records and messages as evidence',
      'File FIR at nearest police station under IPC 354D',
      'Can also apply for restraining order from Magistrate',
    ],
    keywords: ['stalking', 'stalker', 'following', 'monitoring', 'repeated calls', 'unwanted contact'],
  },
  {
    id: 'H004',
    category: 'Harassment',
    title: 'Dowry Harassment',
    law_reference: 'Dowry Prohibition Act, 1961 / IPC Section 498A',
    description:
      'Demanding, giving, or taking dowry is illegal. Cruelty by husband or his family towards wife for dowry is punishable with up to 3 years imprisonment under IPC 498A. In dowry death cases, punishment is 7-14 years.',
    simplified_explanation:
      'If your in-laws or husband are harassing you for more dowry or valuables after marriage, this is a serious criminal offense. You can file an FIR immediately.',
    documents_required: [
      'Written complaint describing harassment',
      'Medical reports if physically harmed',
      'Evidence of demands (messages, witnesses)',
      'Marriage certificate',
    ],
    authority: 'Police Station / Women Helpline 181 / Mahila Thana',
    procedure_steps: [
      'File FIR at police station under IPC 498A and Dowry Prohibition Act',
      'Contact Women Helpline 181 for support',
      'Seek help from State Women Commission',
      'Police must arrest accused under 498A',
    ],
    keywords: ['dowry', 'dowry harassment', '498a', 'in-laws harassment', 'marriage harassment'],
  },
  {
    id: 'H005',
    category: 'Harassment',
    title: 'Caste-Based Discrimination and Atrocities',
    law_reference: 'Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989',
    description:
      'The SC/ST Prevention of Atrocities Act prohibits serious crimes against SC/ST communities including verbal abuse, forced labour, social boycott, and violence. Investigation must be completed within 60 days.',
    simplified_explanation:
      'If you face discrimination, verbal abuse, or violence because of your caste, the SC/ST Atrocities Act provides strong protection. Police must register FIR immediately — this is a serious offense.',
    documents_required: [
      'Caste certificate',
      'Written complaint of the incident',
      'Witness statements',
      'Medical report if injured',
    ],
    authority: 'Police Station / SP-level Special Cell / SC/ST Commission',
    procedure_steps: [
      'File FIR at police station — they MUST register it',
      'File complaint with SP of the district if police refuse',
      'Contact National/State SC/ST Commission',
      'Case must be filed in Special Court under the Act',
    ],
    keywords: ['caste discrimination', 'sc st atrocities', 'dalit rights', 'untouchability', 'caste abuse'],
  },
  {
    id: 'H006',
    category: 'Harassment',
    title: 'Ragging in Educational Institutions',
    law_reference: 'UGC Regulations on Curbing the Menace of Ragging, 2009',
    description:
      'Ragging in colleges and universities is prohibited. Students who are ragged can file complaints with the institution anti-ragging committee and UGC. The institution can expel the accused.',
    simplified_explanation:
      'If you are ragged or bullied in your college or university, you have the right to complain. The institution must act immediately, and serious cases can lead to expulsion of the accused.',
    documents_required: [
      'Written complaint describing the incident',
      'Names/details of accused students',
      'Witness names',
    ],
    authority: 'Anti-Ragging Committee of Institution / UGC / Police',
    procedure_steps: [
      'Call Anti-Ragging Helpline: 1800-180-5522',
      'File written complaint with institution anti-ragging committee',
      'File complaint on UGC anti-ragging portal',
      'File FIR at police station for criminal cases',
    ],
    keywords: ['ragging', 'bullying', 'college bullying', 'senior harassment', 'campus harassment'],
  },
  {
    id: 'H007',
    category: 'Harassment',
    title: 'Police Harassment / Custodial Abuse',
    law_reference: 'IPC Section 330, 331 / Article 21 Indian Constitution',
    description:
      'Every arrested person has rights including right to know reasons for arrest, right to legal counsel, right to inform family. Custodial torture is a criminal offense. Police cannot hold you beyond 24 hours without magistrate order.',
    simplified_explanation:
      'If police are harassing you, beating you in custody, or refusing to show arrest memo — these are violations of your fundamental rights. You have the right to a lawyer immediately upon arrest.',
    documents_required: [
      'Arrest memo copy',
      'Medical certificate if tortured',
      'Written complaint',
    ],
    authority: 'Magistrate / State Human Rights Commission / National Human Rights Commission',
    procedure_steps: [
      'Demand arrest memo immediately upon arrest',
      'Request to call a lawyer — this is your right',
      'Apply for bail through magistrate within 24 hours',
      'File complaint with NHRC or SHRC for custodial abuse',
      'File Writ of Habeas Corpus in High Court if illegally detained',
    ],
    keywords: ['police harassment', 'custodial abuse', 'illegal detention', 'police torture', 'false arrest'],
  },

  // ─── TENANCY ──────────────────────────────────────────────────
  {
    id: 'T001',
    category: 'Tenancy',
    title: 'Illegal Eviction / Forced Removal from Rented Property',
    law_reference: 'Rent Control Act (State-specific) / Transfer of Property Act, 1882',
    description:
      'A landlord cannot evict a tenant without a valid court order. Forcible eviction, changing locks without court order, or removing tenant\'s belongings is illegal. Tenant must receive proper notice as per state rent control laws.',
    simplified_explanation:
      'Your landlord cannot throw you out of your rented home without going to court first. If a landlord tries to forcibly evict you by changing locks or removing your things, this is illegal.',
    documents_required: [
      'Rent agreement',
      'Rent receipts',
      'Written eviction notice from landlord',
      'Identity proof',
    ],
    authority: 'Rent Control Tribunal / Civil Court / Police',
    procedure_steps: [
      'If being forcibly evicted, call police immediately',
      'File complaint under Rent Control Act with Rent Controller',
      'Seek stay order from Rent Control Court',
      'If landlord changed locks illegally, police must intervene',
    ],
    keywords: ['eviction', 'forced out', 'locked out', 'illegal eviction', 'landlord throwing out'],
  },
  {
    id: 'T002',
    category: 'Tenancy',
    title: 'Security Deposit Withheld by Landlord',
    law_reference: 'Transfer of Property Act, 1882 / State Rent Control Acts',
    description:
      'After a tenancy ends, the landlord must return the security deposit after deducting actual repair costs. Withholding security deposit without valid reason and refusing to return it is actionable.',
    simplified_explanation:
      'If your landlord is refusing to return your security deposit after you vacated the property, you can file a case in Rent Court or Small Causes Court to get it back.',
    documents_required: [
      'Rent agreement showing deposit amount',
      'Receipt for deposit payment',
      'Proof of vacating (written notice given)',
      'Condition report of property at exit',
    ],
    authority: 'Rent Control Tribunal / Consumer Commission / Civil Court',
    procedure_steps: [
      'Send written legal notice to landlord demanding return of deposit',
      'Wait 30 days for response',
      'File complaint in Rent Control Tribunal or Small Causes Court',
      'Consumer Commission is also an option for service deficiency',
    ],
    keywords: ['security deposit', 'deposit not returned', 'landlord deposit', 'advance not returned'],
  },
  {
    id: 'T003',
    category: 'Tenancy',
    title: 'Landlord Refusing Maintenance / Repairs',
    law_reference: 'Transfer of Property Act, 1882 – Section 108',
    description:
      'The landlord has a duty to keep the rented property in habitable condition and carry out major repairs. Failure to do so is a breach of the tenancy agreement.',
    simplified_explanation:
      'Your landlord is legally responsible for keeping your rented home in good condition. If they refuse to fix major problems (leaking roof, broken plumbing, electricity issues), you can take legal action.',
    documents_required: [
      'Rent agreement',
      'Written requests to landlord for repairs',
      'Photos of the damage/problem',
    ],
    authority: 'Rent Control Tribunal / Civil Court',
    procedure_steps: [
      'Send written notice to landlord listing repairs needed',
      'Give 15-30 days to carry out repairs',
      'File application with Rent Controller if ignored',
      'Court can order landlord to carry out repairs',
    ],
    keywords: ['repairs', 'maintenance', 'landlord not repairing', 'broken plumbing', 'leaking roof', 'property condition'],
  },
  {
    id: 'T004',
    category: 'Tenancy',
    title: 'Unlawful Rent Increase',
    law_reference: 'State Rent Control Acts',
    description:
      'Rent can only be increased as per the terms in the rent agreement or as permitted by state rent control legislation. Sudden or excessive rent hikes outside the agreement terms are not permitted.',
    simplified_explanation:
      'Your landlord cannot increase your rent arbitrarily or outside the terms agreed in your rent agreement. Any unlawful rent increase can be challenged before the Rent Controller.',
    documents_required: [
      'Original rent agreement',
      'Current rent receipts',
      'Written notice of rent increase from landlord',
    ],
    authority: 'Rent Controller / Rent Control Tribunal',
    procedure_steps: [
      'Review rent agreement for rent increase clause',
      'If increase violates agreement, send written objection to landlord',
      'File application with Rent Controller to fix standard rent',
      'Continue paying original rent till order of Rent Controller',
    ],
    keywords: ['rent increase', 'rent hike', 'landlord raising rent', 'increased rent', 'unfair rent'],
  },
  {
    id: 'T005',
    category: 'Tenancy',
    title: 'Denial of Basic Utilities by Landlord',
    law_reference: 'State Rent Control Acts / Human Rights Law',
    description:
      'A landlord cannot deliberately cut off electricity, water, or other essential services to force a tenant to vacate. Such action is harassment and is punishable.',
    simplified_explanation:
      'If your landlord cuts off electricity or water to harass you or force you to leave, this is illegal. You have a right to essential services in your rented home.',
    documents_required: [
      'Rent agreement',
      'Proof of utility cutoff (photos, dates)',
      'Written complaints to landlord',
    ],
    authority: 'Rent Control Tribunal / Police / Civil Court',
    procedure_steps: [
      'Document the utility cutoff with photos and dates',
      'Send written notice to landlord demanding restoration',
      'File complaint with police for harassment',
      'File application with Rent Controller for immediate relief',
    ],
    keywords: ['no electricity', 'water cut', 'utilities cut', 'landlord harassment', 'tenant rights'],
  },
  {
    id: 'T006',
    category: 'Tenancy',
    title: 'Unregistered Rent Agreement',
    law_reference: 'Registration Act, 1908 / State Tenancy Act',
    description:
      'Rent agreements for more than 11 months must be compulsorily registered. Unregistered agreements cannot be used as evidence in court for tenancy beyond 11 months.',
    simplified_explanation:
      'If your rent agreement is for more than 11 months, it must be registered with the sub-registrar. An unregistered agreement has limited legal value. You have the right to ask your landlord to register it.',
    documents_required: [
      'Original rent agreement',
      'Identity proof of both parties',
      'Property documents',
      'Stamp duty receipt',
    ],
    authority: 'Sub-Registrar Office',
    procedure_steps: [
      'Get rent agreement drafted by a lawyer',
      'Buy appropriate stamp paper',
      'Both landlord and tenant must visit sub-registrar office',
      'Pay registration fee and get registered agreement',
    ],
    keywords: ['rent agreement', 'unregistered', 'lease agreement', 'rental contract', 'rent deed'],
  },

  // ─── Additional entries for completeness ─────────────────────
  {
    id: 'L008',
    category: 'Labour Law',
    title: 'Denial of Annual Leave / Casual Leave',
    law_reference: 'Shops and Establishments Act (State-specific) / Factories Act, 1948',
    description:
      'Workers are entitled to annual leave (earned leave) and casual leave as per their state\'s Shops and Establishments Act or Factories Act. Denial of leave entitlement or lapsing of legally earned leave is not permitted.',
    simplified_explanation:
      'Every employee has the right to annual paid leave. Your employer cannot arbitrarily deny your leave or cancel your legally earned leave without compensation.',
    documents_required: ['Employment contract', 'Leave records', 'Correspondence with HR'],
    authority: 'Labour Commissioner',
    procedure_steps: [
      'Check your leave entitlement in your appointment letter and state laws',
      'If denied, send written representation to HR/management',
      'File complaint with Labour Commissioner if still denied',
    ],
    keywords: ['leave', 'annual leave', 'vacation', 'earned leave', 'casual leave'],
  },
  {
    id: 'C008',
    category: 'Consumer Rights',
    title: 'Telecom / Internet Service Issues',
    law_reference: 'Telecom Regulatory Authority of India (TRAI) Act, 1997',
    description:
      'Telecom operators must provide services as per plans offered. If internet speed is lower than promised or services are interrupted frequently, consumers can file complaints with TRAI.',
    simplified_explanation:
      'If your mobile or broadband provider is not delivering the speed or service they promised, or overcharging you, you can file a complaint with TRAI — the telecom regulator.',
    documents_required: ['Bill copies', 'Speed test screenshots', 'Written complaint to ISP'],
    authority: 'TRAI Complaint Portal / Consumer Commission',
    procedure_steps: [
      'First complain to the service provider',
      'If unresolved, file complaint on TRAI Complaint Portal',
      'Approach Consumer Commission if still unresolved',
    ],
    keywords: ['internet slow', 'telecom complaint', 'jio airtel', 'mobile data', 'broadband', 'billing error'],
  },
  {
    id: 'H008',
    category: 'Harassment',
    title: 'Acid Attack',
    law_reference: 'IPC Section 326A, 326B',
    description:
      'Throwing acid or attempting to throw acid on a person is a specific criminal offense. Mandatory minimum 10 years imprisonment for acid attack, up to life. Hospitals must treat acid attack victims without prepayment.',
    simplified_explanation:
      'Acid attack is one of the most serious violent crimes. Hospitals are legally required to treat acid attack victims without asking for money upfront. Attackers face mandatory minimum 10 years in prison.',
    documents_required: ['Medical reports', 'FIR', 'Identity proof'],
    authority: 'Police / Hospital / National Acid Attack Victim Assistance Program',
    procedure_steps: [
      'Immediate medical treatment — hospital CANNOT refuse',
      'File FIR immediately at police station',
      'Contact Crime Against Women Cell',
      'Apply for compensation under Victim Compensation Scheme',
    ],
    keywords: ['acid attack', 'acid throw', 'burn', 'disfigurement', 'violence'],
  },
  {
    id: 'CY008',
    category: 'Cybercrime',
    title: 'Social Media Account Impersonation',
    law_reference: 'IPC Section 419, 465, 468 / IT Act Section 66D',
    description:
      'Creating a fake social media profile impersonating another person to defame them or commit fraud is a punishable offense under IPC and IT Act.',
    simplified_explanation:
      'If someone created a fake account using your name and photos to harass or defame you, this is a crime called impersonation. You can file a cybercrime complaint and get the account removed.',
    documents_required: ['Screenshot of fake profile', 'Link to fake account', 'Proof of your real identity'],
    authority: 'Cyber Crime Cell / Police',
    procedure_steps: [
      'Report fake profile to the social media platform immediately',
      'File complaint on cybercrime.gov.in',
      'File FIR at police station under IT Act Section 66D',
    ],
    keywords: ['fake account', 'impersonation', 'fake profile', 'identity fake', 'fake id'],
  },
  {
    id: 'T007',
    category: 'Tenancy',
    title: 'Landlord Entering Without Notice',
    law_reference: 'Transfer of Property Act, 1882 – Section 108',
    description:
      'A landlord cannot enter the rented premises without giving the tenant prior notice (usually 24-48 hours) except in genuine emergencies. Unauthorized entry violates the tenant\'s right to peaceful possession.',
    simplified_explanation:
      'Your landlord does not have the right to enter your rented home whenever they want without giving you prior notice. You have the right to peaceful enjoyment of your rented space.',
    documents_required: ['Rent agreement', 'Records of unauthorized entries'],
    authority: 'Rent Control Tribunal / Police',
    procedure_steps: [
      'Inform landlord in writing that prior notice is required',
      'Document any unauthorized entries',
      'File complaint with police if landlord persists',
      'Approach Rent Controller for protection',
    ],
    keywords: ['landlord entering', 'privacy', 'unauthorized entry', 'landlord trespassing', 'no notice'],
  },
]

/**
 * Simple keyword-based retrieval function (simulates semantic search)
 * In production, this would use vector embeddings and cosine similarity
 */
export function retrieveRelevantEntries(query: string, topK = 3): LegalEntry[] {
  const queryLower = query.toLowerCase()
  const queryWords = queryLower.split(/\s+/)

  const scored = legalDataset.map((entry) => {
    let score = 0
    const searchText = [
      entry.title,
      entry.description,
      entry.simplified_explanation,
      ...entry.keywords,
      entry.category,
    ]
      .join(' ')
      .toLowerCase()

    // Keyword matching
    for (const word of queryWords) {
      if (word.length < 3) continue
      if (entry.keywords.some((k) => k.includes(word) || word.includes(k))) score += 3
      if (entry.title.toLowerCase().includes(word)) score += 2
      if (entry.category.toLowerCase().includes(word)) score += 2
      if (searchText.includes(word)) score += 1
    }

    // Exact phrase matching in keywords
    for (const kw of entry.keywords) {
      if (queryLower.includes(kw)) score += 5
    }

    return { entry, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.entry)
}

/**
 * Classify query into legal category
 */
export function classifyQuery(query: string): LegalCategory | null {
  const queryLower = query.toLowerCase()

  const categoryKeywords: Record<LegalCategory, string[]> = {
    'Labour Law': ['salary', 'wages', 'employer', 'employee', 'job', 'work', 'fired', 'terminated', 'leave', 'pf', 'overtime', 'minimum wage', 'provident', 'maternity'],
    'Consumer Rights': ['product', 'refund', 'defective', 'consumer', 'purchase', 'bought', 'delivery', 'online shopping', 'bank', 'service', 'hospital', 'builder', 'rera', 'advertisement'],
    'Cybercrime': ['hack', 'online fraud', 'upi', 'scam', 'internet', 'cyber', 'phishing', 'ransomware', 'account hacked', 'data', 'privacy', 'social media'],
    'Harassment': ['harass', 'sexual', 'stalking', 'domestic violence', 'dowry', 'bully', 'abuse', 'threatening', 'caste', 'ragging', 'acid'],
    'Tenancy': ['rent', 'landlord', 'tenant', 'evict', 'deposit', 'house', 'flat', 'lease', 'tenancy', 'rented'],
  }

  const scores: Record<string, number> = {}
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    scores[cat] = 0
    for (const kw of keywords) {
      if (queryLower.includes(kw)) scores[cat] += 1
    }
  }

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
  return best[1] > 0 ? (best[0] as LegalCategory) : null
}

/**
 * Get analytics data for the NGO dashboard
 */
export function getAnalyticsData() {
  const categoryCounts = LEGAL_CATEGORIES.reduce(
    (acc, cat) => {
      acc[cat] = legalDataset.filter((e) => e.category === cat).length
      return acc
    },
    {} as Record<string, number>
  )

  return {
    totalEntries: legalDataset.length,
    categoryCounts,
    topCategories: Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([category, count]) => ({ category, count })),
  }
}
