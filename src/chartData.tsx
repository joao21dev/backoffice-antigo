export const optionsAccounts = {
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 28,
      },
    },
  },
};

export const optionsCards = {
  cutout: "80%",

  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        boxWidth: 10,
        padding: 20,
      },
    },
  },
};

export const dataStatusAccount = {
  labels: ["Ativa", "Pendente", "Bloqueada", "Desativada"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 7, 10, 5],
      backgroundColor: ["#7958F0", "#9AE6B4", "#FCB6A4", "#C4B0FF"],

      borderWidth: 1,
    },
  ],
};

export const dataSortAccount = {
  labels: ["Pessoa", "Empresarial"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#1D54E1", "#54C5EB"],
      borderWidth: 1,
    },
  ],
};

export const dataAgencyCard = {
  labels: ["São Paulo", "Belo Horizonte", "Salvador", "Curitiba"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 30, 40],
      backgroundColor: ["#B34B39", "#B187FF", "#FF816B", "#27B377"],

      borderWidth: 1,
    },
  ],
};

export const dataStatusCard = {
  labels: ["Ativo", "Pendentee", "Bloqueado", "Cancelado"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 30, 40],
      backgroundColor: ["#E3DD30", "#7730E3", "#2643F0", "#969102"],

      borderWidth: 1,
    },
  ],
};
export const dataPlansStatusCard = {
  labels: ["Ativo", "Pendentee", "Bloqueado", "Cancelado"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 30, 40],
      backgroundColor: ["#E3DD30", "#7730E3", "#2643F0", "#969102"],

      borderWidth: 1,
    },
  ],
};
