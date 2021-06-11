import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionis de sua localidade"
        }
      />
      <UserInformation
        name={"Diego Ferreira"}
        picture={"https://github.com/diegohfcelestino.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
