# 💻 LapShift

**LapShift** is a modern workstation marketplace that enables professionals, students, and creators to acquire laptops and productivity gadgets through flexible payment options.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🚀 Overview

Technology should empower productivity, not limit it. **LapShift** aims to remove financial barriers that prevent people from accessing the tools they need to build, create, and innovate.

### Users can:

- **Buy devices instantly** for immediate ownership.
- **Pay through installments** to manage cash flow.
- **Trade in old devices** to significantly reduce purchase costs.
- **Build custom workstation bundles** tailored to their specific career path.

---

## 🍱 Core Features

### 1. Workstation Marketplace

Browse premium hardware including Laptops, Monitors, Mechanical keyboards, Audio equipment, and Accessories.

### 2. Ready-Made Workstation Bundles

Curated setups designed for specific professional needs:

- **Developer Workstation:** MacBook Pro + Mechanical Keyboard + 4K Monitor.
- **Creator Studio:** MacBook Air + Ring Light + Lavalier Microphone.

### 3. Custom Bundle Builder

A seamless flow to build a personalized setup:
`Select Laptop` → `Add Accessories` → `Review Bundle` → `Choose Payment` → `Checkout`

### 4. Flexible Payment System

- **Installment Example:** ₦1,200,000 workstation on a 12-month plan = **₦100,000/month**.
- **Trade-In Example:** ₦1,200,000 price - ₦200,000 (Trade-in) = **₦1,000,000 final price**.

---

## 🏗️ System Architecture

LapShift uses a modern full-stack architecture built for speed and security.

- **Frontend:** Next.js + React + TypeScript
- **Backend:** Node.js API Layer
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Deployment:** Vercel + Cloud Infrastructure

### Project Structure

```text
src
 ├─ app/             # builder, checkout, gadgets, workstations
 ├─ components/      # bundle, builder, layout, ui
 ├─ types/           # TypeScript interfaces
 ├─ services/        # API calls and external logic
 └─ lib/             # Shared utilities
```
