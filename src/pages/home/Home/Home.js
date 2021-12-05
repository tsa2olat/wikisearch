import { PageTitle, inputValueName, SearchForm, TextInput } from "common";
import { Button, FormWrapper } from "./styled";
import { useMediaWatcher } from "common/useMediaWatcher";

const Home = () => {
  const isSmallScreen = useMediaWatcher({ maxWidth: 500 });

  return (
    <>
      <PageTitle>Wiki browser</PageTitle>

      <SearchForm>
        <FormWrapper>
          <TextInput
            autoFocus
            name={inputValueName}
            type="text"
            label="Search Wikipedia*"
            validate
            size={isSmallScreen ? "small" : "medium"}
          />

          <Button type="submit">Search</Button>
        </FormWrapper>
      </SearchForm>
    </>
  );
};

export default Home;