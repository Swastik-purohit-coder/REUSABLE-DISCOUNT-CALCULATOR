# 💸 Reusable Discount Calculator (JavaScript)

A simple and reusable **Discount Calculator** built with **Higher-Order Functions (HOF)** in JavaScript. This tool calculates the final price after applying a given discount percentage to any product price.

---

## 📌 Features

- 🔁 Reusable discount function using HOF (Higher-Order Function)
- ✅ Input validation (ensures price and discount are valid)
- 💡 Real-time calculation with an interactive HTML form
- 🎯 Easy to integrate and extend

---

## 🚀 How It Works

We use a **higher-order function** that takes a discount percentage and returns a new function to calculate discounted prices based on it.

```js
function createDiscountCalculator(discountPercent) {
    return function(price) {
        // Validations
        // Calculate discount
        return +(price - discount).toFixed(2);
    };
}
