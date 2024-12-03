// react a redirect to the resume pdf
import { useEffect } from "react";
import { useRouter } from "next/router";

const ResumePDF = ()=> {
    const router = useRouter();

    useEffect(() => {
      // Redirect to Google
      window.location.href = "https://birdperson-server-e27d01cb4fa2.herokuapp.com/resume-pdf";
    }, []);

    return null;
}

export default ResumePDF;