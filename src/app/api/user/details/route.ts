import jwt from "jsonwebtoken";

type Body = {
  user: string;
};

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const { user } = body;

    const decodedUser = jwt.verify(user, JWT_SECRET) as {
      name: string;
      password: string;
    };

    if (!decodedUser || !decodedUser.name || !decodedUser.password) {
      return Response.json({
        user: {
          name: "",
          password: "",
        },
      });
    }

    return Response.json({
      user: {
        name: decodedUser.name,
        password: decodedUser.password,
      },
    });
  } catch (err) {
    console.error("ERROR GETTING USER DETAILS: ", err);

    return Response.json({
      user: {
        name: "",
        password: "",
      },
    });
  }
}
