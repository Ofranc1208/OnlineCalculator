# Offer Calculator Integration – Developer Guide

This project allows users to calculate a personalized financial offer based on their personal and health data. The form is divided into two steps and uses conditional logic to display inputs and generate results.

## ?? Project Structure

### 1. Form Sections

- **Step 1: Basic Info**
  - Age Group
  - Payment Type (Guaranteed, For Life, Not Sure)
  - Payment Mode (Monthly, Quarterly, etc.)
  - Payment Amount
  - Annual Increase (Slider)
  - Start/End Date

- **Step 2: Health Info**
  - Gender
  - Height
  - Weight Category
  - Smoking Status
  - General Health Profile
  - Traffic Violations
  - Cardiac Health

### 2. JSON Schema

See `offerCalculatorTemplate.json` for a structure to use in React `useState` or form libraries like Formik. This schema maps directly to user inputs and is ready to be submitted to a backend for calculation or storage.

### 3. Suggested React Setup

```js
const [formData, setFormData] = useState({
  basicInfo: {
    ageGroup: '',
    paymentType: '',
    paymentMode: '',
    paymentAmount: 0,
    annualIncrease: 0,
    startDate: '',
    endDate: ''
  },
  healthInfo: {
    gender: '',
    height: '',
    weightCategory: '',
    smoking: '',
    healthProfile: '',
    trafficViolations: '',
    cardiacHealth: ''
  },
  meta: {
    calculatedOffer: null,
    submittedAt: null
  }
});