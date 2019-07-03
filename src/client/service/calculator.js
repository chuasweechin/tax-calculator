export default {
    calculate(annualIncome) {
        let tax = 0;

        for (let i = 0; i < TAX_RATE.length; i++) {
            // this allow the previous tier tax rates to be applied
            if (annualIncome > TAX_RATE[i].to) {
                tax += (TAX_RATE[i].to - TAX_RATE[i].previous) * TAX_RATE[i].rate;
            }

            // this allow the current tier tax rates to be applied
            if (annualIncome > TAX_RATE[i].from && annualIncome < TAX_RATE[i].to) {
                tax += (annualIncome - TAX_RATE[i].previous) * TAX_RATE[i].rate;
            }
        }
        return tax;
    }
}

const TAX_RATE = [{
        previous: 0,
        from: 0,
        to: 50000000,
        rate: 0.05
    },
    {
        previous: 50000000,
        from: 50000001,
        to: 250000000,
        rate: 0.15
    },
    {
        previous: 250000000,
        from: 250000001,
        to: 500000000,
        rate: 0.25
    },
    {
        previous: 500000000,
        from: 500000001,
        to: Infinity,
        rate: 0.3
    }];