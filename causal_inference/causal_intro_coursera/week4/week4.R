install.packages('tableone')
install.packages('Matching')
install.packages('ipw')
install.packages('sandwich')
install.packages('survey')
install.packages('MatchIt')

library('tableone')
library('Matching')
library('ipw')
library('survey')
library('sandwich')
library('MatchIt')

data(lalonde)


#dont use CreateTableOne use svyCreateTableOne
vars=c("age","educ","race","married","nodegree","re74","re75")
weighteddata<-svydesign(ids=~1, data=lalonde,weights=~weight)
weightedtable=svyCreateTableOne(vars=vars,strata="treat",data=weighteddata,test=FALSE)
print(weightedtable,smd=TRUE)

#
weightmodel<-ipwpoint(exposure="treat", family = "binomial", link ="logit",
          denominator= ~"age"+"educ"+"race"+"married"+"nodegree"+"re74"+"re75", data=lalonde)
#numeric summary of weights
summary(weightmodel$ipw.weights)
#plot of weights
ipwplot(weights = weightmodel$ipw.weights, logscale = FALSE,
         main = "weights", xlim = c(0, 22))
lalonde$wt<-weightmodel$ipw.weights
print('---------------')

#fit a marginal structural model (risk difference)
msm <- (svyglm(lalonde$treat ~ treatment, design = svydesign(~ 1, weights = ~wt,
                  data =lalonde)))
coef(msm)
confint(msm)