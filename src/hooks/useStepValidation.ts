"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface StepValidationProps {
  code: string;
  token: string;
  step: number;
  maxSteps: number;
  adLevel: number;
}

interface ValidationResult {
  isValidating: boolean;
  isValid: boolean | null;
}

export function useStepValidation({
  code,
  token,
  step,
  maxSteps,
  adLevel,
}: StepValidationProps): ValidationResult {
  const router = useRouter();
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip validation for step 1 (always allowed)
    if (step === 1) {
      setIsValidating(false);
      setIsValid(true);
      return;
    }

    // Validate step access
    const validateStep = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/links/${code}/validate-step`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, step }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.warn("🛡️ Step validation failed:", data);

          // Redirect to correct step
          const redirectStep = data.data?.redirect_step || 1;
          router.replace(
            `/article/step${redirectStep}?code=${code}&token=${token}&level=${adLevel}&step=${redirectStep}&maxSteps=${maxSteps}`
          );
          setIsValid(false);
        } else {
          setIsValid(true);
        }
      } catch (error) {
        console.error("Step validation error:", error);
        // On error, redirect to step 1
        router.replace(
          `/article/step1?code=${code}&token=${token}&level=${adLevel}&step=1&maxSteps=${maxSteps}`
        );
        setIsValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    if (code && token) {
      validateStep();
    } else {
      setIsValidating(false);
      setIsValid(false);
    }
  }, [code, token, step, maxSteps, adLevel, router]);

  return { isValidating, isValid };
}
