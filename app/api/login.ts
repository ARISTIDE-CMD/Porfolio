import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, name } = req.body; // tu peux juste demander l'email

  try {
    const client = await clientPromise;
    const db = client.db("arisdev");

    let user = await db.collection("users").findOne({ email });

    if (!user) {
  // Si pas trouvé, créer automatiquement le compte
  const newUser = {
    email,
    name: name || "Utilisateur",
    avatar: null, // avatar par défaut
    createdAt: new Date(),
  };

  const result = await db.collection("users").insertOne(newUser);

  // Construire l'objet user en ajoutant l'ID généré
  user = {
    _id: result.insertedId,
    ...newUser,
  };
}


    // Renvoyer les infos de l'utilisateur (sans mot de passe)
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
