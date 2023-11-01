import HeaderForm from "./HeaderForm";
import HeaderTitle from "./HeaderTitle";

function HeaderView() {
  return (
    <div className="bg-color-primary h-screen">
      <HeaderTitle />
      <HeaderForm />
    </div>
  );
}

export default HeaderView;
