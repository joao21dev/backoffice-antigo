import { useEffect, useState } from "react";

import {
  Box, Button, Flex,
  FormControl,
  FormErrorMessage,
  FormLabel, Input,
  Text
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { config } from "../../core/config";
import api from "../../services/api";

const FaresCreate = () => {
  const { id } = useParams();

  const [datafare,setdatafare] = useState({
    client_id: config.clientId,
    name: "",
    description: "",
    duoDate:"",
    value: 0,
  });


  useEffect(() => {
    if(id){
      getFare(id)

    }
  }, [])
  
 
  const navigate = useNavigate();

  const getFare = async (id)=>{
    await api
    .get(`/fares/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then((data) => {
      setdatafare(data.data)
    })
    .catch((error) => {
      alert(JSON.stringify(error));
    });
 };

  const createFare = async (fare) => {
    await api
      .post("/fares", fare, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((x) => {
        navigate("/fares");
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
    <SidebarWithHeader>
      <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
        Criar Tarifa
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
            Detalhes da Tarifa
          </Text>
        </Flex>
        <Formik
          initialValues={datafare}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              createFare(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName} >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nome da tarifa</FormLabel>
                    <Input {...field} id="name" placeholder="Nome" />
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
                      Descrição
                    </FormLabel>
                    <Input
                      {...field}
                      id="description"
                      placeholder="Descreva a tarifa"
                     
                      />
                    <FormErrorMessage>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="value" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.value && form.touched.value
                    }
                  >
                    <FormLabel htmlFor="value">
                      Valor
                    </FormLabel>
                    <Input
                      {...field}
                      id="value"
                      placeholder="0.00"
                      type="number"
                    />
                    <FormErrorMessage>
                      {form.errors.value}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="duoDate" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.duoDate && form.touched.duoDate
                    }
                  >
                    <FormLabel htmlFor="duoDate">
                      Valor
                    </FormLabel>
                    <Input
                      {...field}
                      id="duoDate"
                      placeholder="DD/MM/YYYY"
                      type="date"
                    />
                    <FormErrorMessage>
                      {form.errors.duoDate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            
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
      </SidebarWithHeader>
    </>
  );
};


export default FaresCreate;
