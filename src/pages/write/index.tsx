import {
  Textarea,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  Button,
  DropdownItem,
} from "@nextui-org/react";

export default function write() {
  return (
    <div>
      <h3>제목</h3>
      <Input />
      <h3>내용</h3>
      <Textarea />
      <h3>카테고리</h3>
    </div>
  );
}
