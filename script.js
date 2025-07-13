  function createDiscountCalculator(discountPercent) {
            return function(price) {
                if (typeof price !== 'number' || price < 0) {
                    throw new Error('Invalid price');
                }
                if (typeof discountPercent !== 'number' || discountPercent < 0 || discountPercent > 100) {
                    throw new Error('Invalid discount percent');
                }
                const discount = (price * discountPercent) / 100;
                return +(price - discount).toFixed(2);
            };
        }

        function calculate() {
            const price = parseFloat(document.getElementById('price').value);
            const discount = parseFloat(document.getElementById('discount').value);
            const resultDiv = document.getElementById('result');

            try {
                const discountFn = createDiscountCalculator(discount);
                const finalPrice = discountFn(price);
                resultDiv.textContent = `Discounted Price: ₹${finalPrice}`;
            } catch (error) {
                resultDiv.textContent = error.message;
            }
        }