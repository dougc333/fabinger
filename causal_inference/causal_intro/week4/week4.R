install.packages('tableone')
install.packages('Matching')
install.packages('ipw')
install.packages('survey')
install.packages('MatchIt')

library('tableone')
library('Matching')
library('ipw')
library('survey')
library('MatchIt')

data(lalonde)


#dont use CreateTableOne use svyCreateTableOne
weighteddata<-svydesign(ids=~1, data=lalonde,weights=~weight)
weightedtable=svyCreateTableOne(vars=vars,strata="treat",data=weighteddata,test=FALSE)
 print(weightedtable,smd=TRUE)

