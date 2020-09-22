package ar.edu.um2020;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("ar.edu.um2020");

        noClasses()
            .that()
                .resideInAnyPackage("ar.edu.um2020.service..")
            .or()
                .resideInAnyPackage("ar.edu.um2020.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..ar.edu.um2020.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
