// src/components/UI/ExchangeRateUI.jsx
import React from "react";
import { Typography, Card, Switch } from "antd";
import { useTheme } from "../theme/ThemeContext";

export function ExchangeRateUI(props) {
  const { price, dataObj, currencySymbol } = props;
  const toCurrency = dataObj.toCurrency;
  const { theme, toggleTheme } = useTheme();
  
  let value = Number(price);
  let currencyCode = toCurrency;
  let currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  });
  let formattedCurrency = currency.format(value);

  return (
    <div className={`exchange-rate-ui ${theme}`}>
      <div style={{position: 'absolute', top: 10, right: 10}}>
        <Switch
          checkedChildren="" 
          unCheckedChildren=""
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
      </div>
      <Card extra={currencySymbol} bordered={false} style={{ width: 350, backgroundColor: "#4d4add", color: '#fff' }} size="default">
        <Typography.Paragraph style={{ color: "#fff", textAlign: "left" }}>{formattedCurrency}</Typography.Paragraph>
      </Card>
    </div>
  );
}