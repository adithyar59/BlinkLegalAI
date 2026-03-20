/**
 * Legal Learning Modules Dataset
 * Structured educational content for legal literacy
 */

export interface LearningLesson {
  id: string
  title: string
  content: string
  keyPoints: string[]
  quiz?: { question: string; options: string[]; answer: number }[]
}

export interface LearningModule {
  id: string
  category: string
  title: string
  description: string
  icon: string
  color: string
  estimatedMinutes: number
  lessons: LearningLesson[]
}

export const learningModules: LearningModule[] = [
  {
    id: 'M001',
    category: 'Consumer Rights',
    title: 'Know Your Consumer Rights',
    description:
      'Learn how the Consumer Protection Act, 2019 empowers you to seek redressal for defective products, poor services, and unfair trade practices.',
    icon: '🛒',
    color: 'bg-blue-50 border-blue-200',
    estimatedMinutes: 15,
    lessons: [
      {
        id: 'M001-L1',
        title: 'Your Six Core Consumer Rights',
        content: `Every Indian consumer has six fundamental rights under the Consumer Protection Act, 2019:

1. **Right to Safety** — Protection against goods and services that are hazardous to life or property.

2. **Right to Information** — The right to be informed about quality, quantity, purity, standard, and price of goods to protect against unfair trade practices.

3. **Right to Choose** — Access to a variety of goods and services at competitive prices.

4. **Right to Be Heard** — Your interests as a consumer will receive due consideration in consumer forums.

5. **Right to Redressal** — Seek redressal against unfair trade practices or unscrupulous exploitation.

6. **Right to Consumer Education** — The right to acquire knowledge and skills to be an informed consumer.`,
        keyPoints: [
          'Six fundamental rights protect every Indian consumer',
          'Right to safety protects against harmful products',
          'Right to information means companies must disclose product details',
          'Right to redressal means you can challenge unfair practices',
        ],
        quiz: [
          {
            question: 'How many fundamental consumer rights are recognized under the Consumer Protection Act, 2019?',
            options: ['Four', 'Five', 'Six', 'Eight'],
            answer: 2,
          },
        ],
      },
      {
        id: 'M001-L2',
        title: 'How to File a Consumer Complaint',
        content: `Filing a consumer complaint is simpler than you think. Here is the step-by-step process:

**Step 1: Try to Resolve Directly**
First, contact the seller, manufacturer, or service provider in writing. Give them a reasonable time (30 days) to resolve the issue.

**Step 2: Gather Your Evidence**
Keep all receipts, warranty cards, photos of defects, and written communications.

**Step 3: Identify the Right Forum**
- Claims up to ₹1 Crore → District Consumer Disputes Redressal Commission
- Claims ₹1 Crore to ₹10 Crore → State Consumer Disputes Redressal Commission
- Claims above ₹10 Crore → National Consumer Disputes Redressal Commission (NCDRC)

**Step 4: File Your Complaint**
You can file:
- In person at the Consumer Commission
- Online at https://consumerhelpline.gov.in
- Call National Consumer Helpline: 1915

**Step 5: Pay the Fee**
A small filing fee is required based on your claim amount.`,
        keyPoints: [
          'Always try to resolve directly with the company first',
          'Keep all purchase and communication records',
          'Three levels of Consumer Commission based on claim amount',
          'National Helpline 1915 is free for guidance',
          'Complaints can be filed online on consumerhelpline.gov.in',
        ],
      },
      {
        id: 'M001-L3',
        title: 'E-Commerce Consumer Rights',
        content: `Online shopping has specific legal protections under the Consumer Protection (E-Commerce) Rules, 2020:

**Your Rights When Shopping Online**
- Complete product information must be displayed before purchase
- Return and refund policy must be clearly stated
- No hidden charges allowed
- Grievance officer must be appointed by the platform
- Complaints must be acknowledged within 48 hours and resolved within 1 month

**What to Do When Your Order Has Problems**
1. Raise a complaint with the e-commerce platform first
2. If unresolved in 30 days, call 1915 or file complaint on consumerhelpline.gov.in
3. File a case with District Consumer Commission

**Important Rule**: E-commerce platforms cannot cancel your confirmed order without valid reason. If they do, they must refund you fully plus compensation.`,
        keyPoints: [
          'E-commerce platforms have legal obligations under 2020 Rules',
          'Complaints must be resolved within 1 month',
          'No hidden charges allowed',
          'Document all transactions for complaint filing',
        ],
      },
    ],
  },
  {
    id: 'M002',
    category: 'Cybercrime',
    title: 'Cyber Safety Awareness',
    description:
      'Understand common online threats, how to protect yourself digitally, and what to do if you become a victim of cybercrime in India.',
    icon: '🔐',
    color: 'bg-red-50 border-red-200',
    estimatedMinutes: 20,
    lessons: [
      {
        id: 'M002-L1',
        title: 'Common Cyber Threats in India',
        content: `India sees millions of cybercrime cases every year. The most common threats are:

**1. UPI & Banking Fraud**
Fraudsters pose as bank officials, TRAI officers, or delivery agents to get your OTP or UPI PIN. Remember: Banks NEVER ask for OTP, PIN, or password.

**2. Phishing**
Fake emails or websites that look like real banks or companies. They try to steal your login credentials.

**3. Ransomware**
Malicious software that locks your files and demands money. Never pay the ransom.

**4. Impersonation / Fake Profiles**
Someone creates a fake social media profile using your photos to defame or harass you.

**5. Online Job Scams**
Fake job offers that ask for registration fees or personal documents.

**Warning Signs:**
- Too-good-to-be-true offers
- Urgency and pressure to act immediately
- Requests for OTP, PIN, or password
- Links that look slightly different from real websites`,
        keyPoints: [
          'Banks NEVER ask for OTP, PIN, or passwords — hang up immediately',
          'Verify website URLs before entering login credentials',
          'Never pay ransomware demands',
          'Job offers asking for money are almost always scams',
        ],
        quiz: [
          {
            question: 'A person claiming to be from your bank calls and asks for your OTP. What should you do?',
            options: [
              'Give them the OTP — it\'s your bank',
              'Hang up immediately — banks never ask for OTP',
              'Ask them to verify their identity first, then give OTP',
              'Ask them to call back later',
            ],
            answer: 1,
          },
        ],
      },
      {
        id: 'M002-L2',
        title: 'Reporting Cybercrime in India',
        content: `If you are a victim of cybercrime, act fast — quick action can help recover your money or limit damage.

**National Cybercrime Reporting Portal**
Website: cybercrime.gov.in
This is the official government portal to report all types of cybercrime including financial fraud, hacking, and online harassment.

**Cyber Crime Helpline**
📞 1930 — For immediate financial fraud
Call immediately if you have sent money to fraudsters. Quick action can freeze the transaction.

**Women & Children-Specific Cybercrime**
Report morphed images, online trafficking, and cyber harassment through the cybercrime.gov.in women/child reporting section.

**What Information to Keep Ready:**
- Screenshots and evidence
- Transaction IDs and amounts
- Fraudster's phone number or account details
- URLs of fake websites

**Time is Critical**: Report financial fraud within minutes or hours. Banks can reverse transactions if reported quickly.`,
        keyPoints: [
          'Call 1930 IMMEDIATELY for financial fraud — time is critical',
          'File online report at cybercrime.gov.in for all cyber offences',
          'Visit police station for FIR if large amounts involved',
          'Save all screenshots and transaction IDs before reporting',
        ],
      },
      {
        id: 'M002-L3',
        title: 'Protecting Your Digital Identity',
        content: `Your digital identity includes everything linked to your online presence. Protecting it is your responsibility.

**Strong Password Practices**
- Use unique passwords for each account
- Passwords should be 12+ characters with numbers and symbols
- Use a password manager app to remember them
- Enable Two-Factor Authentication (2FA) on all accounts

**Protecting Your Aadhaar**
- Do not share your Aadhaar number randomly
- Use masked Aadhaar (only last 4 digits visible) for most purposes
- Lock your biometrics on UIDAI website: uidai.gov.in
- Check your Aadhaar history for unauthorized use

**Safe Online Practices**
- Never click unverified links in SMS or email
- Always check website URL begins with https://
- Log out of accounts when using shared devices
- Keep your phone's OS and apps updated

**What If Your Identity is Stolen?**
1. Report to cybercrime.gov.in immediately
2. Inform your bank and freeze accounts
3. Report to UIDAI (1947) if Aadhaar is misused
4. File FIR at police station`,
        keyPoints: [
          'Use strong, unique passwords and 2FA for all accounts',
          'Lock your Aadhaar biometrics when not in use',
          'Never click links in unsolicited SMS or emails',
          'Report identity theft immediately to bank and police',
        ],
      },
    ],
  },
  {
    id: 'M003',
    category: 'Labour Law',
    title: 'Labour Rights Overview',
    description:
      'Understand your rights as an employee in India — covering wages, leave, termination, workplace safety, and how to take action if your rights are violated.',
    icon: '⚖️',
    color: 'bg-green-50 border-green-200',
    estimatedMinutes: 18,
    lessons: [
      {
        id: 'M003-L1',
        title: 'Every Worker\'s Basic Rights',
        content: `Every person who works in India is entitled to several fundamental rights:

**1. Right to Minimum Wages**
The government sets minimum wages for each category of work. Your employer MUST pay at least this amount. Check your state's minimum wage notification online.

**2. Right to Timely Payment**
Wages must be paid by 7th or 10th of the following month (as per the Payment of Wages Act). Deductions from wages are tightly regulated.

**3. Right to Safe Working Conditions**
The Factories Act requires employers to maintain safe, clean, and hazard-free workplaces. Accidents due to employer negligence are compensable.

**4. Right to Leave**
Workers are entitled to:
- Earned/Annual Leave
- Sick Leave
- Casual Leave
- Maternity Leave (for women — 26 weeks for first 2 children)
- National Holidays

**5. Right to Provident Fund (EPF)**
If your employer has 20+ employees, both you and your employer must contribute 12% of basic wage to EPF. This is your retirement savings.

**6. Right to Gratuity**
After 5 years of continuous service, you are entitled to gratuity payment when you leave. Formula: 15 × Last Salary × Years of Service ÷ 26`,
        keyPoints: [
          'Minimum wage must be paid as notified by state government',
          'Salary must be paid by 7th or 10th of following month',
          'EPF applies to all organizations with 20+ employees',
          'Women get 26 weeks of fully paid maternity leave',
          'Gratuity is payable after 5 years of continuous service',
        ],
        quiz: [
          {
            question: 'After how many years of continuous service is an employee entitled to gratuity?',
            options: ['2 years', '3 years', '5 years', '7 years'],
            answer: 2,
          },
        ],
      },
      {
        id: 'M003-L2',
        title: 'Wrongful Termination and Your Rights',
        content: `Losing your job is stressful, but knowing your rights can help you fight back if termination was illegal.

**What is Wrongful Termination?**
Termination is wrongful if:
- No prior notice was given (or notice pay)
- No valid reason was provided
- Terminated for discriminatory reasons (gender, caste, religion, pregnancy)
- Terminated during protected periods (maternity leave, sick leave)

**Notice Period Rules**
Most employment contracts require 30-90 days notice before termination. If notice is not given, you must receive salary in lieu of notice.

**Industrial Workers Protection**
Under the Industrial Disputes Act, workers in establishments with 100+ employees cannot be retrenched without:
1. Government permission
2. 3 months notice or pay
3. Retrenchment compensation (15 days wages per year of service)

**What Can You Do?**
1. Collect your termination letter and all documents
2. File complaint with Labour Commissioner within 3 years
3. Seek reinstatement or compensation through Industrial Tribunal
4. Consult a Labour Law lawyer for complex cases`,
        keyPoints: [
          'Termination without notice or valid reason may be wrongful',
          'Industrial workers at large firms have strong protection',
          'File complaint with Labour Commissioner within 3 years',
          'You may be entitled to reinstatement plus back wages',
        ],
      },
      {
        id: 'M003-L3',
        title: 'How to File a Labour Complaint',
        content: `If your employer is violating your rights, here is how to take formal action:

**Step 1: Internal Grievance**
First raise the issue formally with your HR department in writing. Keep copies of all communications.

**Step 2: Labour Commissioner Office**
Visit your local Labour Commissioner Office with:
- Employment documents (appointment letter, salary slips)
- Proof of the violation (bank statements, attendance records)
- Written complaint describing the issue

**Step 3: Conciliation**
The Labour Commissioner will try to resolve the dispute through conciliation between you and your employer. This is free and faster than court.

**Step 4: Labour Court / Industrial Tribunal**
If conciliation fails, the case is referred to Labour Court or Industrial Tribunal. You can be represented by a lawyer.

**Important Contacts:**
- National Labour Helpline: 14567
- EPFO for PF issues: epfindia.gov.in
- ESIC for medical benefits: esic.in

**Time Limits:**
- Wage complaints: within 3 years
- Wrongful termination: within 3 years
- Sexual harassment: within 3 months to ICC`,
        keyPoints: [
          'Always raise grievance in writing to HR first',
          'Labour Commissioner provides free conciliation service',
          'Call 14567 for National Labour Helpline',
          'Time limit for wage complaints is 3 years',
        ],
      },
    ],
  },
  {
    id: 'M004',
    category: 'Harassment',
    title: 'Rights Against Harassment and Abuse',
    description:
      'Learn about your legal protections against various forms of harassment — including domestic violence, workplace harassment, stalking, and online abuse.',
    icon: '🛡️',
    color: 'bg-purple-50 border-purple-200',
    estimatedMinutes: 16,
    lessons: [
      {
        id: 'M004-L1',
        title: 'Understanding Domestic Violence Law',
        content: `The Protection of Women from Domestic Violence Act, 2005 provides comprehensive protection to women.

**Who is Protected?**
Any woman who is in a domestic relationship with the abuser — wife, live-in partner, mother, sister, daughter.

**What Constitutes Domestic Violence?**
1. **Physical Abuse** — hitting, slapping, kicking, choking, burning
2. **Sexual Abuse** — forced sexual acts, marital rape
3. **Verbal/Emotional Abuse** — name-calling, threats, humiliation, public insults
4. **Economic Abuse** — preventing from working, controlling money, denying basic needs, stealing property

**Reliefs Available Under the Act:**
- **Protection Order** — Court prohibits the abuser from committing violence or contacting you
- **Residence Order** — You cannot be thrown out of your shared home
- **Maintenance Order** — Abuser must provide financial support
- **Custody Order** — Temporary custody of children
- **Compensation Order** — Payment for injuries and suffering

**Who to Contact:**
- Women Helpline: 181
- Police Emergency: 112
- Protection Officer at your District Women & Child Development office`,
        keyPoints: [
          'Domestic violence includes physical, sexual, verbal, and economic abuse',
          'Women cannot be evicted from shared home under this law',
          'Protection Order can be issued within 3 days in emergencies',
          'Call 181 for free support and guidance',
        ],
        quiz: [
          {
            question: 'Which of these is NOT considered domestic violence under Indian law?',
            options: [
              'Physical hitting',
              'Withholding money for basic needs',
              'Verbal insults and humiliation',
              'Disagreeing on household decisions without abuse',
            ],
            answer: 3,
          },
        ],
      },
      {
        id: 'M004-L2',
        title: 'Workplace Sexual Harassment (POSH Law)',
        content: `The POSH Act (Prevention, Prohibition and Redressal of Sexual Harassment at Workplace) protects every woman at her workplace.

**What is Sexual Harassment at Workplace?**
- Physical contact or advances
- Demand or request for sexual favors
- Making sexually colored remarks
- Showing pornography against will
- Any other unwelcome physical, verbal, or non-verbal conduct of sexual nature

**Your Rights Under POSH:**
1. Right to file complaint with Internal Complaints Committee (ICC)
2. Right to transfer to another department during inquiry
3. Right to be protected from retaliation
4. Inquiry must complete in 90 days
5. Interim relief can be ordered immediately

**What if Your Company Has No ICC?**
Every employer with 10+ employees MUST have an ICC. If not, this itself is punishable. You can file complaint with Local Complaints Committee at your District level.

**Complaint Process:**
1. File written complaint with ICC within 3 months of incident
2. ICC will summon the accused
3. Inquiry conducted fairly with opportunity for both sides
4. Recommendations sent to employer for action
5. Can also file criminal FIR simultaneously`,
        keyPoints: [
          'POSH Act protects women from workplace sexual harassment',
          'Every company with 10+ employees must have an ICC',
          'File complaint within 3 months of the incident',
          'You can request transfer while inquiry is ongoing',
          'Retaliation against complainant is illegal',
        ],
      },
      {
        id: 'M004-L3',
        title: 'Helplines and Support Resources',
        content: `If you or someone you know is in danger or facing harassment, these resources are available 24/7:

**Emergency Numbers**
- Police Emergency: 112
- Women Helpline: 181
- Child Helpline: 1098
- Cyber Crime: 1930
- National Anti-Ragging: 1800-180-5522

**Online Portals**
- Cybercrime Complaints: cybercrime.gov.in
- National Women Commission: ncw.nic.in
- SC/ST Atrocities: ncrwc.nic.in

**Key Points About Seeking Help:**
- Police are LEGALLY required to register your FIR — they cannot refuse
- If police refuse, you can approach the SP or Magistrate directly
- Free legal aid is available from Legal Services Authorities (NALSA)
- NALSA Helpline: 15100

**Know Your Rights When Reporting:**
1. You can give complaint in any language
2. FIR must be given to you in writing free of charge
3. Women's complaints of sexual assault must be recorded by female officer
4. Your name is protected in published records for sensitive cases`,
        keyPoints: [
          'Police cannot refuse to register FIR — approach SP if they do',
          'Free legal aid available through NALSA (15100)',
          'Women helpline 181 provides 24/7 support',
          'You can file complaint in your own language',
        ],
      },
    ],
  },
  {
    id: 'M005',
    category: 'Tenancy',
    title: 'Tenant Rights and Rental Laws',
    description:
      'Understand your rights as a tenant in India — from rent agreements and security deposits to dealing with difficult landlords and illegal eviction.',
    icon: '🏠',
    color: 'bg-yellow-50 border-yellow-200',
    estimatedMinutes: 12,
    lessons: [
      {
        id: 'M005-L1',
        title: 'Understanding Your Rent Agreement',
        content: `A rent agreement is a legal contract between landlord and tenant. Understanding it protects you.

**Key Clauses to Look For:**
1. **Rent Amount** — The exact monthly rent agreed
2. **Security Deposit** — Usually 2-3 months rent; conditions for deduction must be specified
3. **Notice Period** — How much advance notice before vacating (typically 1-3 months)
4. **Rent Escalation** — Whether and by how much rent can be increased annually
5. **Maintenance Responsibility** — Who is responsible for repairs and maintenance
6. **Lock-in Period** — Minimum duration before either party can exit

**Registration Requirements:**
- Agreements for 11 months or less: Not compulsorily registerable (most common)
- Agreements for more than 11 months: MUST be registered at Sub-Registrar Office
- Unregistered agreements for longer periods cannot be used as evidence in court

**Why Registration Matters:**
- Registered agreement is legally binding and enforceable
- Protects both landlord and tenant
- Required for many official purposes (address proof, etc.)

**Stamp Duty:**
Stamp duty is payable on rent agreements as per state rates. For registered agreements, both parties must visit the Sub-Registrar office.`,
        keyPoints: [
          'Read all clauses carefully before signing',
          'Agreements over 11 months must be registered',
          'Registered agreements have full legal protection',
          'Security deposit conditions must be clearly stated in writing',
        ],
        quiz: [
          {
            question: 'A rental agreement for what duration requires compulsory registration?',
            options: [
              'Agreements for 6 months or more',
              'Agreements for 11 months or more',
              'All rental agreements regardless of duration',
              'Agreements for more than 11 months',
            ],
            answer: 3,
          },
        ],
      },
      {
        id: 'M005-L2',
        title: 'What to Do If Your Landlord Misbehaves',
        content: `Your rights as a tenant are protected by law. Here is what you can do in common problem situations:

**If Landlord Refuses to Return Security Deposit:**
1. Send written notice giving 15-30 days to return deposit
2. If ignored, file case in Rent Control Court or Small Causes Court
3. Consumer Commission is also available for refund claims

**If Landlord Tries to Evict You Illegally:**
1. Know this: Landlord CANNOT evict without a court order
2. If locks are changed, call police — this is illegal
3. File application with Rent Controller for protection
4. Court will issue stay order preventing eviction

**If Landlord Refuses Essential Repairs:**
1. Document the problem with photos and written requests
2. Send written notice giving 30 days to repair
3. File complaint with Rent Controller if ignored
4. Court can order landlord to repair

**If Landlord Raises Rent Unfairly:**
1. Check your rent agreement for escalation clause
2. If increase violates agreement, send written objection
3. File application with Rent Controller to fix standard rent
4. Continue paying original rent pending court order

**Key Number:**
Your state Rent Control Act governs all tenancy disputes — know which court handles it in your state.`,
        keyPoints: [
          'Landlord cannot evict without a court order — period',
          'If locks are changed illegally, police must intervene',
          'File with Rent Controller for all tenancy disputes',
          'Document everything in writing as evidence',
        ],
      },
    ],
  },
]

export function getModuleById(id: string): LearningModule | undefined {
  return learningModules.find((m) => m.id === id)
}

export function getModulesByCategory(category: string): LearningModule[] {
  return learningModules.filter((m) => m.category === category)
}
