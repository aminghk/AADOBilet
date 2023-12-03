import HeaderForm from "./HeaderForm";
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";

function HeaderView() {
  return (
    <div className="bg-color-primary h-screen">
      <HeaderMenu />
      <HeaderTitle />
      <HeaderForm />
    </div>
  );
}

export default HeaderView;
