import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Note() {
  return (
    <Card variant={"filled"}>
      <CardHeader>
        <Heading size={"md"}>Заметка</Heading>
      </CardHeader>
      <Divider borderColor={"gray"} />
      <CardBody>
        <Text>Текст заметки</Text>
      </CardBody>
      <Divider borderColor={"gray"} />
      <CardFooter>Дата создания</CardFooter>
    </Card>
  );
}
