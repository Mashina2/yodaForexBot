from AlgorithmImports import *
class yodatrial(QCAlgorithm):
    def Initialize(self):
        self.SetStartDate(2021, 1, 1)  # Set Start Date for back testing
        self.SetEndDate(2022,1,1)   # Set End for back testing
        self.SetCash(100000)  # Set Strategy Cash for backtesting purposes
        
        #adding security data 
        # self.AddEquity("SPY", Resolution.Minute)
        spy = self.AddEquity("SPY", Resolution.Daily)
        
        #set the data normalization mode
        spy.SetDataNormalizationMode(DataNormalizationMode.Raw)

        self.spy = spy.Symbol
        
        self.SetBenchmark("SPY")
        self.SetBrokerageModel(BrokerageName.InteractiveBrokersBrokerage, AccountType.Margin)
        
        #custom helper variable
        self.entryPrice = 0
        self.period = timedelta(31)
        self.nextEntryTime = self.Time
       


    def OnData(self, data):
        if not self.spy in data:
            return
        #price = data.Bars[seld.spy].close
        price = data[self.spy].Close
        #price = self.Security[self.spy].close
        if not self.Portfolio.Invested:
            if self.nextEntryTime <= self.Time:
                self.SetHoldings(self.spy,1)
                #self.MarketOrder(self.spy,int(self.Portfolio.Cash/price))
                self.Log("BUY SPY @"+str(price))
                self.entryPrice =price 
            elif self.entryPrice * 1.1 < price or self.entryprice * 0.9 > price:
                self.Liquidate()
                self.Log("Sell SPY @"+str(price))
                self.nextEntryTime = self.Time + self.period 