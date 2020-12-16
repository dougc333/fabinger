install.packages('glm2')
install.packages('glmnet')
library('glm2')

setwd('/Users/dougchang/Desktop/fabinger/poisson')
crab=read.table("crab.txt")
print(names(crab))
crab=crab[c("V2","V3","V4","V5","V6")]
model=glm(crab$V6~1+crab$V5,family=poisson(link=log))
#print=data.frame(crab,pred=model$fitted)
#print

#### note the linear predictor values
#### e.g., for the first observation, exp(1.3378)=3.810

#model$linear.predictors
#exp(model$linear.predictors)
print("summary")
print(summary(model))
print("--------------")
p=data.frame(crab,pred=model$fitted)
print(p)
print(";;;;;;;;")
print(model$linear.predictors)
