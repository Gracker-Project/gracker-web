import React, { useState } from "react";
import {
  MoreInfoPageLayout,
  Logo,
  CenteredContainer,
  IconWrapper,
} from "./MoreInfo.style";
import {
  FormWrapper,
  FormItem,
  ItemTitle,
  ItemContent,
  ItemInput,
  ItemSelect,
} from "@/components/common/form/Form.style";
import Button from "@/components/common/form/Button";
import logo from "@/assets/logo_black.svg";

const MoreInfo: React.FC = () => {
  const [department, setDepartment] = useState("");

  const departments = [
    "컴퓨터학부 심화컴퓨터전공 (현 플랫폼소프트웨어데이터과학전공)",
    "컴퓨터학부 글로벌소프트웨어융합전공",
    "컴퓨터학부 인공지능컴퓨팅전공",
  ];


  return (
    <MoreInfoPageLayout>
      <CenteredContainer>
        <IconWrapper>
          <Logo src={logo} alt="Logo" />
        </IconWrapper>
        <FormWrapper>
          <FormItem>
            <ItemTitle>학번</ItemTitle>
            <ItemContent>
                <ItemInput placeholder="성함을 입력해주세요." />
            </ItemContent>
          </FormItem>

          <FormItem>
            <ItemTitle>학과(부) 및 전공</ItemTitle>
            <ItemContent>
              <ItemSelect
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="" disabled>
                  학과(부) 및 전공을 선택해주세요
                </option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </ItemSelect>
            </ItemContent>
          </FormItem>
        </FormWrapper>
        <Button buttonContent="입력 완료" />
      </CenteredContainer>
    </MoreInfoPageLayout>
  );
};

export default MoreInfo;