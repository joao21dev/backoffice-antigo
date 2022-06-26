import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../../../core/config";
import api from "../../../services/api";
const PlansDetailForm = () => {

  const { id } = useParams();

  const [dataplan,setDataplan] = useState({
    client_id: config.clientId,
    status: 0,
    name: "",
    beneficios: "",
    description: "",
    disponibilidade: 0,
    taxMonthly: 0,
    taxPix: 0,
    taxTed: 0,
    taxBillet: 0,
    taxWithdraw: 0,
    freePix: 0,
    freeTed: 0,
    freeBillet: 0,
    freePeriodo: 0,
    timeInadinplencia: 0,
  });


  useEffect(() => {
    getPlan(id)
  }, [id])
  
 
  const navigate = useNavigate();

  const getPlan = async (id)=>{
    await api
    .get(`/plans/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then((data) => {
      console.log(data.data)
      setDataplan(data.data)
    })
    .catch((error) => {
      alert(JSON.stringify(error));
    });
 };

  const createPlan = async (plan) => {
    console.log(plan);
    await api
      .post("/plans", plan, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((x) => {
        navigate("/plans");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

 

  function validateName(value) {
    let error;
    if (!value) {
      error = "Valor necessário";
    }
    return error;
  }

  return (
    <>
      <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
        Criar Plano
      </Text>{" "}
      <Box
        fontWeight="medium"
        p="6"
        boxShadow="md"
        borderRadius="15px"
        mt="15px"
        bg="white"
        h="60%"
        w="100%"
        color="black"
      >
        <Flex>
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Detalhes do Plano
          </Text>
        </Flex>
        <Formik
          initialValues={dataplan}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              createPlan(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nome do Plano</FormLabel>
                    <Input {...field} id="name" placeholder="Nome do plano" value={dataplan.name}/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="description" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                  >
                    <FormLabel htmlFor="description">
                      Descrição do plano
                    </FormLabel>
                    <Input
                      {...field}
                      id="description"
                      placeholder="Descreva o plano"
                      value={dataplan.description}
                    />
                    <FormErrorMessage>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Field name="taxMonthly" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.taxMonthly && form.touched.taxMonthly
                        }
                      >
                        <FormLabel htmlFor="taxMonthly">Taxa mensal</FormLabel>
                        <Input
                          {...field}
                          id="taxMonthly"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.taxMonthly}
                          
                        />
                        <FormErrorMessage>
                          {form.errors.taxMonthly}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="taxPix" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.taxPix && form.touched.taxPix}
                      >
                        <FormLabel htmlFor="taxPix">Taxa pix</FormLabel>
                        <Input
                          {...field}
                          id="taxPix"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.taxPix}
                        />
                        <FormErrorMessage>
                          {form.errors.taxPix}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="taxTed" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.taxTed && form.touched.taxTed}
                      >
                        <FormLabel htmlFor="taxTed">Taxa ted</FormLabel>
                        <Input
                          {...field}
                          id="taxTed"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.taxTed}
                        />
                        <FormErrorMessage>
                          {form.errors.taxTed}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="taxBillet" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.taxBillet && form.touched.taxBillet
                        }
                      >
                        <FormLabel htmlFor="taxBillet">Taxa boleto</FormLabel>
                        <Input
                          {...field}
                          id="taxBillet"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.taxBillet}
                        />
                        <FormErrorMessage>
                          {form.errors.taxBillet}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="taxWithdraw" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.taxWithdraw && form.touched.taxWithdraw
                        }
                      >
                        <FormLabel htmlFor="taxWithdraw">Taxa saque</FormLabel>
                        <Input
                          {...field}
                          id="taxWithdraw"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.taxWithdraw}
                        />
                        <FormErrorMessage>
                          {form.errors.taxWithdraw}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={100}>
                <GridItem w="100%" h="10">
                  <Field name="freePix" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.freePix && form.touched.freePix}
                      >
                        <FormLabel htmlFor="freePix">
                          Valor operação pix gratuito:
                        </FormLabel>
                        <Input
                          {...field}
                          id="freePix"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.freePix}
                        />
                        <FormErrorMessage>
                          {form.errors.freePix}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="freeTed" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.freeTed && form.touched.freeTed}
                      >
                        <FormLabel htmlFor="freeTed">
                          Valor operação TED gratuito:
                        </FormLabel>
                        <Input
                          {...field}
                          id="freeTed"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.freeTed}
                        />
                        <FormErrorMessage>
                          {form.errors.freeTed}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="freeBillet" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.freeBillet && form.touched.freeBillet
                        }
                      >
                        <FormLabel htmlFor="freeBillet">
                          Valor operação boleto gratuito:
                        </FormLabel>
                        <Input
                          {...field}
                          id="freeBillet"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.freeBillet}
                        />
                        <FormErrorMessage>
                          {form.errors.freeBillet}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="freePeriodo" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.freePeriodo && form.touched.freePeriodo
                        }
                      >
                        <FormLabel htmlFor="freePeriodo">
                          Período da gratuidade:
                        </FormLabel>
                        <Input
                          {...field}
                          id="freePeriodo"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.freePeriodo}
                        />
                        <FormErrorMessage>
                          {form.errors.freePeriodo}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Field name="timeInadinplencia" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.timeInadinplencia &&
                          form.touched.timeInadinplencia
                        }
                      >
                        <FormLabel htmlFor="timeInadinplencia">
                          Tempo de inadimplência:
                        </FormLabel>
                        <Input
                          {...field}
                          id="timeInadinplencia"
                          placeholder="0.00"
                          type={"number"}
                          value={dataplan.timeInadinplencia}
                        />
                        <FormErrorMessage>
                          {form.errors.timeInadinplencia}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
              </Grid>
              <Button
                mt={154}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default PlansDetailForm;
