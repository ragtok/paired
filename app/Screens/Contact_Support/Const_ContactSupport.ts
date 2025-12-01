import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import type { ContactSupportProps } from "../../Navigation/navigation";

export const MAX_MESSAGE = 600;

export function useContactSupportState(route: ContactSupportProps["route"]) {
  const userFromRoute = route?.params?.user || { name: "Unknown User", email: "unknown@nomail.app" };
  const [name] = useState<string>(userFromRoute.name);
  const [email] = useState<string>(userFromRoute.email);

  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const subjectValid = subject.trim().length >= 3 || subject.trim() === "";
  const messageValid = message.trim().length >= 10 || message.trim() === "";
  const canSubmit = subject.trim().length >= 3 && message.trim().length >= 10;

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showSuccess ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [showSuccess, fadeAnim]);

  const onSubmit = async () => {
    if (!canSubmit || isSending) return;
    try {
      setIsSending(true);
      await new Promise((res) => setTimeout(res, 900)); // simulate send
      setShowSuccess(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return {
    name,
    email,
    subject,
    setSubject,
    message,
    setMessage,
    isSending,
    touched,
    setTouched,
    subjectValid,
    messageValid,
    canSubmit,
    showSuccess,
    setShowSuccess,
    fadeAnim,
    onSubmit,
  };
}

