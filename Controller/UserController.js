import prisma from "../db/db.config.js";
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (findUser) {
        return res.json({
          status: 400,
          message: "Email Already Taken . please another email.",
        });
      }

      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
    
      return res.json({ status: 200, data: newUser, msg: "User created." });
    };


    

    export const updateUser = async (req, res) => {
      const userId = req.params.id;
      const { name, email, password } = req.body;
    
      await prisma.user.update({
        where: {
          id: Number(userId),
        },
        data: {
          name,
          email,
          password,
        },
      });
      return res.json({ status: 200, message: "User updated successfully" });
};


export const showUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: user });
};


export const fetchUser = async (req,res) => {
  const users = await prisma.user.findMany({
    select: {
      _count :{
        select: {
          posts: true,
          comments : true,

        }
      }
    }
  })
  return res.json({status : 200, data : users})
}