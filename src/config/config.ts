export const config = {
  dev: {
    REDIS_PASS: process.env.DEVRedisPass,
    REDIS_URL: process.env.DevRedisURL, //free-redis:1cNBOj91GihLAImqOA1gN@redis-10066.c83.us-east-1-2.ec2.cloud.redislabs.com:10066
    REDIS_DB: process.env.DevRedDB,
    MONGODB: process.env.Devmongodb, //classic:D8QXstN1AqAlaimA@cluster0.k0nju.mongodb.net/salondb?retryWrites=true&w=majority
    PASS_SECRET: process.env.DevPASS_SECRET,
    SESSION_SECRET: process.env.DEVSession_Secret, //"A very big secret"
    MSALCID: process.env.DevMSALCID, //"401ed383-0ce7-4e2e-96f9-a1a439da366f"
    MSALSEC: process.env.DevMSALEC, //"secret"
    MSALAUTH: process.env.DevMSALAuth,
    MAPKEY: process.env.DEVMapKey, //I72s2JWm27TudNTb0SJRFqAfVr-lLbU8V6U89UeEm5M"
    MAPSEC: process.env.DEVMapSec, //"1cNBOj91GihLAImqOA1gNheXMbFpoEs8BX0_KsYM2lo"
    MAPL: process.env.DEVMapL, //"4e2e-96f9-a1a439da366f1cNBOj91GihLAImq"
    MAPID: process.env.DEVMapID, //"401ed383-0ce7-4e2e-96f9-a1a439da366f"
  },
  prod: {
    REDIS_PASS: process.env.ProdRedisPass,
    REDIS_URL: process.env.ProdRedisURL, //free-redis:1cNBOj91GihLAImqOA1gN@redis-10066.c83.us-east-1-2.ec2.cloud.redislabs.com:10066
    REDIS_DB: process.env.ProdRedDB,
    MONGODB: process.env.Prodmongodb, //classic:D8QXstN1AqAlaimA@cluster0.k0nju.mongodb.net/salondb?retryWrites=true&w=majority
    PASS_SECRET: process.env.ProdPASS_SECRET,
    SESSION_SECRET: process.env.ProdSession_Secret, //"A very big secret"
    MSALCID: process.env.ProdMSALCID, //"401ed383-0ce7-4e2e-96f9-a1a439da366f"
    MSALSEC: process.env.ProdMSALEC, //"secret"
    MSALAUTH: process.env.ProdMSALAuth,
    MAPKEY: process.env.ProdMapKey, //I72s2JWm27TudNTb0SJRFqAfVr-lLbU8V6U89UeEm5M"
    MAPSEC: process.env.ProdMapSec, //"1cNBOj91GihLAImqOA1gNheXMbFpoEs8BX0_KsYM2lo"
    MAPL: process.env.ProdMapL, //"4e2e-96f9-a1a439da366f1cNBOj91GihLAImq"
    MAPID: process.env.ProdMapID,
  },
};
