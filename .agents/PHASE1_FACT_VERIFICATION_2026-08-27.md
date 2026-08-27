# Phase 1 Fact Verification Audit (2026-08-27)

Primary Source of Truth: `attached_assets/Grand_Blanc_Computer_Science_Honor_Society_Constitution_1781304000859.pdf` (CSTA approved July 21, 2022; modified for Grand Blanc High School March 20, 2025).

---

## Fact Verification Matrix

| # | Claim on Site | Primary Source Location | Verification Analysis | Status | Action Taken / Resolved |
|---|---|---|---|---|---|
| 1 | **Chapter Name & Abbreviation**: Grand Blanc Computer Science Honor Society (GBCSHS) | Article I, Section 1 (Page 2) | *"The name of this organization shall be the Grand Blanc Computer Science Honor Society. It will also be known as GBCSHS."* | **PASS** | Preserved verbatim across all routes and metadata. |
| 2 | **Three Core Values & Exact Definitions**: Equity, Service, Excellence | Article I, Section 3 (Page 2) | Exact definitions in constitution: (1) Equity: potential to enroll, grow, excel in computing; (2) Service: ambassadors of CS discipline; (3) Excellence: outstanding scholarship. | **PASS** | Formatted all 3 definitions to mirror constitutional text in `Home.tsx` and `About.tsx`. |
| 3 | **National Chartering Body & Address**: CSTA, 332 S. Michigan Ave, Chicago, IL 60604 | Article I, Section 4 (Page 2) & Article XIV, Section 4 (Page 10) | Computer Science Teachers Association (CSTA), 332 S. Michigan Ave, 9th Floor, Chicago, IL 60604 (501(c)(3) not-for-profit). | **PASS** | Verified in headers, footers, and About page. |
| 4 | **School Location & Room**: Grand Blanc High School, Room 504, 12500 Holly Rd, Grand Blanc, MI 48439 | Article I, Section 5 (Page 2) | *"GBCSHS is located at Grand Blanc High School room 504 at 12500 Holly Rd. Grand Blanc, MI 48439"* | **PASS** | Preserved in navigation, footer, Leadership, and Home. |
| 5 | **Active CS Sections**: GBHS offers 6 sections of computer science | Article II, Section 3, Item 2 (Page 3) | *"School offers one or more sections of computer science; 6 sections"* | **FIXED / ADDED** | Added concrete mention of 6 CS sections to `Academics.tsx` and `Home.tsx`. |
| 6 | **Faculty Advisor**: Mr. Todd Beard | Article II, Section 3, Items 3–4 (Page 3) | *"School selects one or more advisors... Mr. Todd Beard"*, *"Advisor has active CSTA+ membership; Mr. Todd Beard"* | **PASS** | Verified on `Leadership.tsx`, `Footer.tsx`, and About. |
| 7 | **Authorizing Principal**: Mr. Michael Fray | Article II, Section 3, Item 9 (Page 3) & Article III (Page 4) | *"Principal gives authorization for society creation. Mr. Michael Fray"* | **FIXED / ADDED** | Added formal acknowledgment of Principal Michael Fray on `Leadership.tsx` and `About.tsx`. |
| 8 | **Grade Eligibility & Attendance**: Grades 9–12, 1+ semester at GBHS | Article VII, Section 1 (Page 6) | *"student in grades 9-12 and have completed at least one semester... in attendance at the school the equivalent of one semester."* | **PASS** | Accurate across `Membership.tsx` and `Home.tsx`. |
| 9 | **Scholarship / GPA Standard Optionality**: 80% / 3.0 / B average in CS coursework | Article VII, Section 2 (Page 6) | *"A chapter may, but does not have to, establish a minimum standard for scholarship... If used, the GPA in computer science courses shall be an average of at least 80 percent, B, or 3.0..."* | **FIXED** | Clarified copy on `Membership.tsx`, `Academics.tsx`, and `Home.tsx` to state this is the chapter's adopted standard under Article VII §2 rather than an unconditional universal mandate. |
| 10 | **Qualifying Courses (5 courses)**: AP CSA, AP CSP, IB CS, ECS, CS Discoveries | Article VII, Footnote 2 (Page 6) | *"Rigorous computer science courses have strong alignment to the CSTA K-12... Examples include Computer Science Discoveries, Exploring Computer Science, AP CS A, AP CSP, and IB CS."* | **PASS** | Accurately detailed on `Academics.tsx` and `Home.tsx`. |
| 11 | **Honor Code Content & Citation**: Original work, no plagiarism, explicit collaboration rules | Article VI, Section 6 & Footnote 1 (Page 6) | Footnote 1 provides the exact CSHS Honor Code text, referenced from Article VI §6. | **FIXED** | Corrected citation on `Membership.tsx` (previously mis-cited as Article VII Footnote 1). |
| 12 | **Non-Discrimination Policy**: Full 11 protected classes | Article VII, Section 4 (Page 7) | Protected classes: race, gender, gender identity, pregnancy, national origin, political affiliation, religion, ethnicity, physical or mental disability, citizenship status, and/or sexual orientation. | **PASS** | Verified verbatim blockquote in `Membership.tsx`. |
| 13 | **Officer Framework**: 4+ elected student officers | Article X, Section 2 (Page 8) | *"Each society shall have four or more officers who are elected annually... local society bylaws shall specify the specific officer positions..."* | **FIXED / CLARIFIED** | Clarified in `Leadership.tsx` that the President, Vice President, Secretary, and Treasurer roles represent the chapter's standard 4-officer constitutional governance model, with no fictitious student names added. |
| 14 | **Service Hours**: 10h annual total, 5h computing minimum | Article XII, Section 5 (Page 9) | *"Each member shall complete ten hours of service each academic year... At least half of these hours (five hours) shall include service related to computer science."* | **PASS** | Verified on `Service.tsx`, `Home.tsx`, and `About.tsx`. |
| 15 | **Service Distinction Awards**: Bronze (25h), Silver (50h), Gold (100h) | Article XII, Section 6 (Page 9–10) | Single academic year recognition: Bronze 25h, Silver 50h, Gold 100h. | **PASS** | Detailed in `Service.tsx` with clear criteria. |
| 16 | **Demographic Equity Review Mandate**: Annual comparison & active recruitment | Article XIII, Section 1 & 2 (Page 10) | Executive committee compares demographics of society to overall school enrollment at least once annually and executes recruitment plans. | **FIXED / ADDED** | Deepened Equity section in `About.tsx` and `Membership.tsx` with this concrete commitment. |
| 17 | **Transfer & Alumni Status**: Transfer auto-acceptance (1 sem probation) & Graduate Member status | Article VI, Sections 2 & 4 (Page 5–6) | Transfer acceptance with advisor letter; Active members become Graduate Members upon graduation. | **PASS** | Preserved on `Membership.tsx`. |
| 18 | **Color Vocabulary**: Grand Blanc High School colors are Red & Black; "Bobcat Crimson" is a design token name | GBHS Official Athletics & Wikipedia | School official colors: Red and Black. Mascot: Bobcats. | **PASS** | Verified that no user-facing copy claims "Crimson" is the school's official word. |
| 19 | **Website Developer Credit**: John Tewolde | Historical project provenance | `jg.tewolde@gmail.com` | **PASS** | Maintained in `Leadership.tsx` and `Footer.tsx`. |

---

## Summary of Findings

- **Total Claims Audited**: 19
- **PASS (Verified Accurate)**: 14
- **FIXED (Corrected citation, clarified optionality/framework, or deepened with unused facts)**: 5
- **FLAGGED-UNVERIFIED**: 0 (all items verified against primary constitutional document or historical developer record).
