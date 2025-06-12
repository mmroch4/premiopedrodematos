import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shh... • Prémio Pedro de Matos",
    short_name: "Shh...",
    description:
      'Este site foi criado como Material Interativo do trabalho "RSA: O método de chaves públicas e assinaturas digitais", apresentado por Miguel Martins Rocha, candidato à 17º edição do Prémio Pedro de Matos, organizado pelo Instituto Politécnico de Leiria.',
    start_url: BASE_URL + "/",
    display: "standalone",
    lang: "pt",
    background_color: "#fcfcfd",
    categories: [
      "RSA",
      "PPM",
      "17º edição Prémio Pedro de Matos",
      "17º edição premiopedrodematos",
      "17º edição premio pedro de matos",
      "IPL",
      "Instituto Politécnico de Leiria",
      "instituto politécnico de leiria",
      "2025",
      "Miguel Martins Rocha",
      "miguel rocha",
      "miguel",
      "https://www.miguelrocha.dev",
      "www.miguelrocha.dev",
      "miguelrocha.dev",
      "Matemática (in)Discreta",
      "Mat-Oeste 2025",
      "Prêmio Pedro de Matos",
      "Concursos de Matemática",
      "Educação em Matemática",
      "Inovação em Educação",
      "Desenvolvimento de Projetos",
      "Matemática Aplicada",
      "Tecnologia Educacional",
      "Estudantes de Matemática",
      "Pesquisas em Matemática",
      "Eventos Acadêmicos",
      "Leiria",
      "Candidatura ao Prêmio",
      "Projetos de Estudantes",
      "Matemática e Tecnologia",
      "Desafios Matemáticos",
      "Comunidade Acadêmica",
      "Formação Acadêmica",
      "Interdisciplinaridade em Matemática",
      "Histórias Encriptadas",
      "Desafio de Encriptação",
      "RSA, PPM, 17º edição Prémio Pedro de Matos, 17º edição premiopedrodematos, 17º edição premio pedro de matos, IPL, Instituto Politécnico de Leiria, instituto politécnico de leiria, 2025, Miguel Martins Rocha, miguel rocha, miguel, https://www.miguelrocha.dev, www.miguelrocha.dev, miguelrocha.dev, Matemática (in)Discreta, Mat-Oeste 2025, Prêmio Pedro de Matos, Concursos de Matemática, Educação em Matemática, Inovação em Educação, Desenvolvimento de Projetos, Matemática Aplicada, Tecnologia Educacional, Estudantes de Matemática, Pesquisas em Matemática, Eventos Acadêmicos, Leiria, Candidatura ao Prêmio, Projetos de Estudantes, Matemática e Tecnologia, Desafios Matemáticos, Comunidade Acadêmica, Formação Acadêmica, Interdisciplinaridade em Matemática, Histórias Encriptadas, Desafio de Encriptação, RSA para Jovens, Matemática Divertida, Feira Mat-Oeste 2025, Leiria 2025, Desencriptar Mensagens, Jogos de Lógica, Aprendizado Interativo, Cibersegurança para Jovens, Criptografia Divertida, Desafios de Criptografia, Histórias Interativas, Enigmas Matemáticos, Aprendendo com Criptografia, Atividades Educativas, Matemática e Aventura, Explorando a Criptografia, Jovens Criptógrafos",
    ],
    theme_color: "#FF9E51",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
