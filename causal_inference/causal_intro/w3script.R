
install.packages('tableone')
install.packages('Matching')
install.packages('MatchIt')
library(tableone)
library(Matching)
library(MatchIt)
data(lalonde)
str(lalonde)
print('names lalonde:')
print(names(lalonde))
print('--------------')
print('calculate standardized differences for covariate married')
vars<-c( "age","educ","race","married","nodegree","re74","re75","re78" )
table_lalonde=CreateTableOne(vars=vars,strat="treat",data=lalonde)
print(table_lalonde,smd=TRUE)
print('--------------')
re78 <- CreateTableOne(vars='re78', strat="treat",data=lalonde)
print(re78)
print('--------------')
print('6349.14 -6984.17')
print(6349.14 -6984.17)
print('---------------')
print('fitting logistic')
lalonde_model<-glm(treat~age+educ+race+married+nodegree+re74+re75,family=binomial(),data=lalonde)
print('summary')
print(summary(lalonde_model))
lalonde$prob_treatment<-predict(lalonde_model,type="response")
lalonde$prob_notreatment<-1-lalonde$prob_treatment
pscore<-lalonde_model$fitted.values
print("pscore:",pscore)

print('min:')
print(min(lalonde$prob_treatment))
print('max:')
print(max(lalonde$prob_treatment))
print('---------------')
print('setting seed:')
set.seed(931139)
greedymatch<-Match(Tr=lalonde$treat,M=1,X=lalonde_model$fitted.values,replace=FALSE)
matched<-lalonde[unlist(greedymatch[c("index.treated","index.control")]), ]

#get table 1 for matched data with standardized differences
matchedtab1<-CreateTableOne(vars=vars, strata ="treat", 
                            data=matched, test = FALSE)
print(matchedtab1, smd = TRUE)
set.seed(931139)
greedymatch1<-Match(Tr=lalonde$treat,M=1,X=lalonde_model$fitted.values,replace=FALSE,caliper=0.1)
matched1<-lalonde[unlist(greedymatch1[c("index.treated","index.control")]), ]

#get table 1 for matched data with standardized differences
matchedtab11<-CreateTableOne(vars=vars, strata ="treat", 
                            data=matched1, test = FALSE)
print(matchedtab11, smd = TRUE)
print('---------------')
match_re78_a<-CreateTableOne(vars='re78',strata="treat",data=matched)
print(match_re78_a)
match_re78<-CreateTableOne(vars='re78',strata="treat",data=matched1)
print(match_re78)

print('---------------')
y_trt<-matched1$re78[matched1$treat==1]
y_con<-matched1$re78[matched1$treat==0]

#pairwise difference
diffy<-y_trt-y_con

#paired t-test
print(t.test(diffy))
