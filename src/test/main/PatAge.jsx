import React, { useState } from 'react';
import { differenceInDays, differenceInMonths, differenceInYears, parseISO } from 'date-fns';

const PetAge = () => {
    function calculateDogAge(dogType, actualAge) {
        let humanAge = 0;

        if (dogType === 'small') {
            if (actualAge <= 2) {
                humanAge = actualAge * 11;
            } else {
                humanAge = ((actualAge - 2) * 5) + 22;
            }
        } else if (dogType === 'medium') {
            if (actualAge <= 2) {
                humanAge = actualAge * 12;
            } else {
                humanAge = ((actualAge - 2) * 5) + 24;
            }
        } else if (dogType === 'large') {
            if (actualAge <= 2) {
                humanAge = actualAge * 13;
            } else {
                humanAge = ((actualAge - 2) * 5) + 26;
            }
        }

        return humanAge;
    }

    function DogAgeCalculator() {
        const [dogType, setDogType] = useState('small');
        const [birthDate, setBirthDate] = useState('');
        const [humanAge, setHumanAge] = useState('');
        const [ageDescription, setAgeDescription] = useState('');

        const handleCalculate = () => {
            const currentDate = new Date();
            const birthDateParsed = parseISO(birthDate);
            const daysOld = differenceInDays(currentDate, birthDateParsed);
            const monthsOld = differenceInMonths(currentDate, birthDateParsed);
            const yearsOld = differenceInYears(currentDate, birthDateParsed);

            let description = "";

            if (yearsOld > 0) {
                description = `${yearsOld}년`;
            } else if (monthsOld > 0) {
                description = `${monthsOld}개월`;
            } else {
                description = `${daysOld}일`;
            }

            // 여기서 actualAge 계산 시 소수점 이하를 내림 처리합니다.
            const actualAge = Math.floor(yearsOld) + Math.floor((monthsOld % 12) / 12);
            const calculatedAge = calculateDogAge(dogType, actualAge);

            setHumanAge(`사람 나이로는 ${calculatedAge}살 입니다.`);
            setAgeDescription(`태어난 지 ${daysOld}일
            ${description} 되었습니다.`);
        }

        return (
            <div>
                <h2>강아지 나이 계산기</h2>
                <select value={dogType} onChange={(e) => setDogType(e.target.value)}>
                    <option value="small">소형견</option>
                    <option value="medium">중형견</option>
                    <option value="large">대형견</option>
                </select>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    placeholder="강아지 생년월일을 입력하세요"
                />
                <button onClick={handleCalculate}>계산하기</button>
                <p>{humanAge}</p>
                <p>{ageDescription}</p>
            </div>
        );
    }

    return <DogAgeCalculator />;
};

export default PetAge;
