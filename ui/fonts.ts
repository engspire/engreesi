import { Noto_Sans_Display, Noto_Sans_Sinhala } from "@next/font/google";

export const english = Noto_Sans_Display({
  subsets: ["latin", "latin-ext", "greek-ext", "cyrillic-ext"],
});

export const sinhala = Noto_Sans_Sinhala({ subsets: ["sinhala", "latin-ext"] });
