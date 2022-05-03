export const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 28,
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
    labels: ['Pessoa', 'Empresarial'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          '#1D54E1',
          '#54C5EB',
          
        ],
        borderWidth: 1,
      },
    ],
  };