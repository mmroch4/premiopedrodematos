import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  creator: "Miguel Martins Rocha <https://www.miguelrocha.dev>",
  robots: { index: true, follow: true },
  authors: [
    { name: "Miguel Martins Rocha", url: "https://www.miguelrocha.dev/" },
  ],
  publisher: "Miguel Martins Rocha",
  manifest: BASE_URL + "/manifest.webmanifest",
  title: "Shh... • Prémio Pedro de Matos",
  description:
    'Material Interativo do trabalho "RSA: O método de chaves públicas e assinaturas digitais", apresentado por Miguel Martins Rocha, candidato à 17º edição do Prémio Pedro de Matos, organizado pelo Instituto Politécnico de Leiria.',
  category:
    "RSA, PPM, 17º edição Prémio Pedro de Matos, 17º edição premiopedrodematos, 17º edição premio pedro de matos, IPL, Instituto Politécnico de Leiria, instituto politécnico de leiria, 2025, Miguel Martins Rocha, miguel rocha, miguel, https://www.miguelrocha.dev, www.miguelrocha.dev, miguelrocha.dev, Matemática (in)Discreta, Mat-Oeste 2025, Prêmio Pedro de Matos, Concursos de Matemática, Educação em Matemática, Inovação em Educação, Desenvolvimento de Projetos, Matemática Aplicada, Tecnologia Educacional, Estudantes de Matemática, Pesquisas em Matemática, Eventos Acadêmicos, Leiria, Candidatura ao Prêmio, Projetos de Estudantes, Matemática e Tecnologia, Desafios Matemáticos, Comunidade Acadêmica, Formação Acadêmica, Interdisciplinaridade em Matemática, Histórias Encriptadas, Desafio de Encriptação, RSA para Jovens, Matemática Divertida, Feira Mat-Oeste 2025, Leiria 2025, Desencriptar Mensagens, Jogos de Lógica, Aprendizado Interativo, Cibersegurança para Jovens, Criptografia Divertida, Desafios de Criptografia, Histórias Interativas, Enigmas Matemáticos, Aprendendo com Criptografia, Atividades Educativas, Matemática e Aventura, Explorando a Criptografia, Jovens Criptógrafos",
  keywords: [
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
  ],
  openGraph: {
    title: "Shh... • Prémio Pedro de Matos",
    description:
      'Material Interativo do trabalho "RSA: O método de chaves públicas e assinaturas digitais", apresentado por Miguel Martins Rocha, candidato à 17º edição do Prémio Pedro de Matos, organizado pelo Instituto Politécnico de Leiria.',
    url: BASE_URL,
    siteName: "Shh...",
    locale: "pt",
    type: "website",
    emails: ["miguelrocha.dev@gmail.com", "46139@aeds.pt"],
    images: [
      {
        url: BASE_URL + "/images/banner.png",
        width: 1920,
        height: 1080,
        alt: "Shh... • Prémio Pedro de Matos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shh... • Prémio Pedro de Matos",
    description:
      'Material Interativo do trabalho "RSA: O método de chaves públicas e assinaturas digitais", apresentado por Miguel Martins Rocha, candidato à 17º edição do Prémio Pedro de Matos, organizado pelo Instituto Politécnico de Leiria.',
    images: [BASE_URL + "/images/banner.png"],
  },
};
