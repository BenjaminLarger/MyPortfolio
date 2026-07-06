# Recepcia: AI Phone Receptionist for European SMBs

## What is Recepcia?

Recepcia is an **AI-powered phone receptionist SaaS platform** that automates appointment scheduling for small businesses across Spain and the EU. It eliminates manual call handling friction by deploying intelligent voice assistants that handle incoming calls 24/7, understand business context, and seamlessly integrate with existing calendar systems.

---

## The Problem It Solves

### Before Recepcia
- Real estate agencies, local services, and SMBs manually answer every incoming call
- Appointment scheduling is time-consuming and error-prone
- Missed calls = lost business opportunities
- No 24/7 availability without hiring additional staff

### After Recepcia
- AI voice assistant automatically answers calls and schedules appointments
- Reduces manual scheduling workload by ~80%
- Ensures 24/7 professional call handling
- Seamless calendar integration (no double-bookings)
- Cost: **<$1/month operational expenses**

---

## Key Features

### 1. **Multilingual AI Voice Assistant**
- Powered by **Vapi** (advanced voice AI platform)
- Understands context and handles complex scheduling scenarios
- Supports Spanish, English, and other EU languages
- Natural conversation flow—feels like talking to a real receptionist

### 2. **Calendar Integration**
- Connects with **Google Calendar** and **Microsoft Outlook**
- Real-time availability checking
- Automatic appointment confirmation
- Reactive token refresh prevents integration failures

### 3. **GDPR Compliance**
- Built for EU regulations from the ground up
- Opt-in cookie consent (not opt-out)
- Data privacy-first architecture
- No data sharing with unnecessary third parties

### 4. **Zero-Friction Onboarding**
- No technical skills required
- Single-click OAuth authentication
- Seamless calendar connection
- Start handling calls within minutes

### 5. **Cost-Efficient Operations**
- Infrastructure: Next.js 15 + PostgreSQL on Railway + Vercel
- Operates on Railway's minimal tier (~$5/month per client max)
- AI voice costs via Vapi scale linearly with usage
- **Total cost to Recepcia: <$1/month per active client**

---

## Target Market

**Primary:** Spanish real estate agencies, property management, local services  
**Secondary:** EU-wide SMBs requiring multilingual appointment scheduling  
**Ideal Profile:**
- 1-5 team members
- 20-100 appointment inquiries monthly
- High call volume during business hours
- Struggling with manual scheduling inefficiency

---

## How It Works

### User Flow
1. **Sign up** via landing page
2. **Connect calendar** (Google or Outlook OAuth)
3. **Configure AI assistant** (language, business hours, rules)
4. **Provision phone number** (Telnyx virtual numbers—coming soon)
5. **Start receiving calls** → AI handles scheduling automatically

### Technical Architecture
```
Incoming Call
    ↓
Vapi AI Assistant (Voice Processing)
    ↓
N8N Automation (Complex Workflows)
    ↓
Calendar Integration (Google Calendar / Outlook)
    ↓
Confirmation Email (Resend)
    ↓
Admin Dashboard (Real-time Analytics & Monitoring)
```

---

## Core Technology Stack

### Frontend & Deployment
- **Next.js 15** (React framework)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (styling)
- **shadcn/ui** (component library)
- **Vercel** (deployment & serverless functions)

### Backend & Database
- **Prisma** (ORM)
- **PostgreSQL** (Railway)
- **Node.js** (API layer)

### Integrations
- **Vapi** - AI voice assistant engine
- **N8N** - Workflow automation (replacing Make.com)
- **Telnyx** - Virtual phone number provisioning
- **Google Calendar API** - Calendar sync
- **Microsoft Outlook API** - Calendar sync
- **Resend** - Email delivery
- **Sentry** - Error tracking & logging

---

## Key Metrics & Success Criteria

### For Recepcia (Business)
- **Operational cost per client:** <$1/month
- **Onboarding time:** <5 minutes
- **Calendar integration uptime:** 99.9% (reactive token refresh)
- **User satisfaction:** Measured by retention & call handling success rate

### For Clients (SMBs)
- **Manual scheduling time saved:** ~80%
- **Missed appointment reduction:** ~95%
- **24/7 availability:** Without hiring additional staff
- **ROI breakeven:** Usually within first month

---

## Roadmap & Future Features

### Immediate (Next 3 Months)
- ✅ Complete Google OAuth verification
- Complete Microsoft Publisher Verification
- Deploy virtual phone number provisioning (Telnyx)
- Enhanced admin dashboard with Vapi call analytics

### Medium-term (3-6 Months)
- WhatsApp Business API integration (property viewing coordination)
- SIP trunk solutions for enterprise clients
- Multi-language expansion (French, German, Portuguese)
- Advanced workflow customization in N8N

### Long-term (6+ Months)
- AI sentiment analysis for call quality monitoring
- Predictive analytics for demand forecasting
- Integration with CRM systems (HubSpot, Salesforce)
- White-label solution for agencies

---

## Competitive Advantages

1. **EU-First Approach:** Built with GDPR compliance from day one
2. **Cost Leadership:** <$1/month per client vs. $20-50/month competitors
3. **Language Support:** Native Spanish support + EU multilingual
4. **Simplicity:** 5-minute setup vs. 2-week implementations
5. **Transparency:** Reactive architecture, no hidden token refresh costs
6. **Real Estate Focus:** Specialized workflows for property management

---

## Risk Mitigation

### Critical Business Risks Addressed
- **Token Expiration:** Multi-layer refresh strategy (reactive + fallback mechanisms)
- **Calendar Sync Failure:** Server-side proxy pattern prevents credential exposure
- **Regulatory Compliance:** GDPR audit-ready, consent-first architecture
- **User Onboarding Friction:** Virtual phone numbers eliminate call forwarding setup

---

## Success Metrics & Measurement

### Technical Health
- Token refresh success rate: >99.9%
- Calendar sync latency: <30 seconds
- Voice call success rate: >95%
- Platform uptime: 99.95%

### Business Metrics
- Monthly Active Users (MAU)
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (LTV)
- Churn rate
- Net Promoter Score (NPS)

### User Satisfaction
- Call handling quality (audio clarity, response accuracy)
- Appointment success rate (scheduled → completed)
- User support ticket volume
- Feature request feedback loop

---

## Current Development Status

**Phase:** Beta Launch (Spanish market testing)  
**Team:** Solo founder (Benjamin)  
**Timeline:** MVP → Production → EU expansion (2025-2026)  
**Funding:** Bootstrap (self-funded)

---

## Contact & Resources

- **Landing Page:** [Recepcia.es](https://recepcia.es) (under development)
- **Status Page:** Real-time platform health monitoring
- **Documentation:** Internal docs + API reference
- **Support:** Email + Discord community (planned)