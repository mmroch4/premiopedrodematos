import { xata } from "@/services/xata";
import jwt from "jsonwebtoken";

type Body = {
  name: string;
  password: string;
};

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const { name, password } = body;

    const user = await xata.db.users.read(name);

    if (!user) {
      await xata.db.users.create(name, {
        password: password,
      });
    } else {
      if (user.password !== password) {
        return Response.json({
          isOk: false,
          token: "",
          error: "WRONG_PASSWORD",
        });
      }
    }

    const token = jwt.sign({ name, password }, JWT_SECRET);

    return Response.json({
      isOk: true,
      token: token,
    });
  } catch (err) {
    console.error("ERROR LINKING USER: ", err);

    return Response.json({
      isOk: false,
      token: "",
      error: "UNKNOWN",
    });
  }
}
