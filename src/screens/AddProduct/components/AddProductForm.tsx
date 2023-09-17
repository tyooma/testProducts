import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Form,
  Label,
  InputWrapper,
  Input,
  Validator,
  Button,
  ButtonText,
  ImageInputButton,
  HiddenInput,
  ProductImage,
} from './styled';
import { Product } from '../../../types/data';
import { colors } from '../../../constants/colors';

interface AddProductFormProp {
  onSubmit: (values: Product) => void;
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be positive'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
});

const AddProductForm: React.FC<AddProductFormProp> = ({ onSubmit }) => {
  const [image, setImage] = useState<string>('');

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <Formik
      initialValues={{
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => onSubmit({ ...values, image })}>
      {({ values, handleChange, handleSubmit, errors, touched, isValid }) => (
        <Form>
          <InputWrapper>
            <Label children="Title" />
            <Input
              placeholder="Enter product title"
              value={values.title}
              onChangeText={handleChange('title')}
            />
            {touched.title && errors.title && (
              <Validator children={errors.title} />
            )}
          </InputWrapper>
          <InputWrapper>
            <Label children="Price" />
            <Input
              placeholder="Enter product price"
              value={values.price}
              onChangeText={handleChange('price')}
              keyboardType="numeric"
            />
            {touched.price && errors.price && (
              <Validator children={errors.price} />
            )}
          </InputWrapper>
          <InputWrapper>
            <Label children="Description" />
            <Input
              placeholder="Enter product description"
              value={values.description}
              onChangeText={handleChange('description')}
              multiline
            />
            {touched.description && errors.description && (
              <Validator children={errors.description} />
            )}
          </InputWrapper>
          <InputWrapper>
            <Label children="Category" />
            <Input
              placeholder="Enter product category"
              value={values.category}
              onChangeText={handleChange('category')}
              multiline
            />
            {touched.category && errors.category && (
              <Validator children={errors.category} />
            )}
          </InputWrapper>
          <Label children="Image" />
          <ImageInputButton onPress={selectImage}>
            <Icon name="plus-square-o" size={40} color={colors.jeffHardy} />
            <HiddenInput value={image} />
          </ImageInputButton>
          {image !== '' && (
            <ProductImage resizeMode="contain" source={{ uri: image }} />
          )}
          <Button onPress={handleSubmit}>
            <ButtonText children="Add Product" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
