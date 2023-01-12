import { AccountInfo, ColorMode, PasswordSettings, Button } from "components";
import { StyledSettingsPage, SettingsBlock, Buttons } from "./styles";

export const SettingsPage = () => {
  return (
    <StyledSettingsPage>
      <SettingsBlock>
        <AccountInfo />
        <PasswordSettings />
        <ColorMode />
      </SettingsBlock>
      <Buttons>
        <Button primary type="button" label="Save" />
        <Button secondary type="button" label="Cancel" />
      </Buttons>
    </StyledSettingsPage>
  );
};
