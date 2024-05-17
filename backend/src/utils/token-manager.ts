// import { rejects } from "assert";
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";

// export const createToken = (id: string, email: string, expiresIn: number) => {
//   const payload = { id, email };
//   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
//   return token;
// };

// export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.signedCookies['${COOKIE_NAME'];
//   return new Promise<void>((resolve, reject) =>{
//     return jwt.verify(token, process.env.JWT_SECRET, (err, success) ) => {
//       if (err) {
//         res.status(401).json({ message: "Token Expired" });
//         return reject(err.message);
//       }else {
//         console.log("Token Verifiation Succesful")
//         result();
//         res.local.jwtData = success;
//         return next();
//       }
//   })
// };

// // TOKEN VERIFIATION - THIS IS THE COMMIT NAME

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const createToken = (id: string, email: string, expiresIn: number) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies["${COOKIE_NAME"];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
    if (err) {
      console.error(err);
      res.status(401).json({ message: "Token Expired" });
      return;
    }
    console.log("Token Verification Successful");
    res.locals.jwtData = success;
    next();
  });
};
