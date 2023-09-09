import React, { FC } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  ExerciseScreenNavigationProp,
  ExerciseScreenRouteProp,
} from '../../types/navigation';
import { colors, mainColors } from '../../constants/colors';

const Exercise: FC = () => {
  const { goBack } = useNavigation<ExerciseScreenNavigationProp>();
  const route = useRoute<ExerciseScreenRouteProp>();
  const { exercise, color } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: mainColors.white,
      }}>
      <TouchableOpacity style={{ marginBottom: 8 }} onPress={goBack}>
        <Icon name="chevron-left" size={30} color={colors.jeffHardy} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 24,
            fontWeight: '900',
            textAlign: 'center',
            color: colors.jeffHardy,
          }}>
          {exercise.name}
        </Text>
        <View style={{ padding: 16, backgroundColor: color, borderRadius: 15 }}>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children="Type: "
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children={exercise.type}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children="Muscle: "
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children={exercise.muscle}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children="Difficulty: "
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children={exercise.difficulty}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children="Equipment: "
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}
              children={exercise.equipment}
            />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                lineHeight: 24,
                textAlign: 'justify',
                color: color === '#363636' ? colors.marlboro : colors.jeffHardy,
              }}>
              Instructions:
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color:
                    color === '#363636' ? colors.marlboro : colors.jeffHardy,
                }}
                children={` ${exercise.instructions}`}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exercise;
